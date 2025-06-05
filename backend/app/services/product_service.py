# app/services/product_service.py

import json
import os
from typing import Any, cast
from fastapi import HTTPException
from app.schemas import ProductDetail


class ProductService:
    """
    Service class to handle product operations.
    """

    def __init__(self) -> None:
        """
        Initialize ProductService with the path to the data source.
        """
        self.data_path: str = os.path.join(
            os.path.dirname(__file__), "..", "data", "products.json"
        )

    def load_products(self) -> list[dict[str, Any]]:
        """
        Load products from the JSON data source.
        """
        try:
            with open(self.data_path, "r") as f:
                products = cast(list[dict[str, Any]], json.load(f))
            return products
        except Exception as e:
            raise HTTPException(
                status_code=500, detail=f"Error loading data: {str(e)}")

    def get_product_by_id(self, product_id: str) -> ProductDetail:
        """
        Retrieve a product by its ID.
        """
        products = self.load_products()
        product_data = next(
            (item for item in products if item["id"] == product_id), None
        )

        if not product_data:
            raise HTTPException(status_code=404, detail="Product not found")

        # Automatically validate and return as ProductDetail model
        return ProductDetail(**product_data)

    def list_products(self, page: int = 1, size: int = 10) -> list[ProductDetail]:
        """
        Return a paginated list of products.
        """
        products = self.load_products()

        # Calculate pagination
        start = (page - 1) * size
        end = start + size
        paginated_products = products[start:end]

        # Return as list of ProductDetail models
        return [ProductDetail(**product) for product in paginated_products]
