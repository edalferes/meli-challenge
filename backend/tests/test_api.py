# tests/test_api.py

from fastapi.testclient import TestClient
from app.main import app
from app.services.product_service import ProductService
from fastapi import HTTPException
import pytest

client = TestClient(app)


def test_root_redirect() -> None:
    """
    Test root path redirect to /v1/health.
    """
    response = client.get("/", follow_redirects=False)
    assert response.status_code in (301, 302, 307, 308)
    assert response.headers["location"] == "/v1/health"


def test_health_check() -> None:
    """
    Test the health check endpoint.
    """
    response = client.get("/v1/health")
    assert response.status_code == 200
    json_data = response.json()
    assert "status" in json_data
    assert json_data["status"] == "ok"
    assert "version" in json_data


def test_get_existing_product() -> None:
    """
    Test retrieving an existing product by ID.
    """
    response = client.get("/v1/products/1")
    assert response.status_code == 200
    data = response.json()
    assert "id" in data
    assert data["id"] == "1"
    assert "title" in data
    assert "price" in data
    assert "description" in data


def test_get_nonexistent_product() -> None:
    """
    Test retrieving a non-existent product by ID.
    """
    response = client.get("/v1/products/9999")
    assert response.status_code == 404
    json_data = response.json()
    assert "detail" in json_data
    assert json_data["detail"] == "Product not found"


def test_list_products_default_pagination() -> None:
    """
    Test listing products with default pagination (page=1, size=10).
    """
    response = client.get("/v1/products")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    # Should return at least 1 product if the dataset is not empty
    assert len(data) > 0
    for product in data:
        assert "id" in product
        assert "title" in product
        assert "price" in product
        assert "description" in product


def test_list_products_with_custom_pagination() -> None:
    """
    Test listing products with custom pagination parameters.
    """
    response = client.get("/v1/products?page=1&size=2")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) <= 2
    for product in data:
        assert "id" in product
        assert "title" in product
        assert "price" in product
        assert "description" in product


def test_load_products_error() -> None:
    """
    Test ProductService load_products error handling.
    """
    service: ProductService = ProductService()
    # Inject invalid path
    service.data_path = "/invalid/path/products.json"

    with pytest.raises(HTTPException) as exc_info:
        service.load_products()

    assert exc_info.value.status_code == 500
    assert "Error loading data" in exc_info.value.detail
