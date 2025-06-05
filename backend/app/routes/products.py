# app/routes/products.py

from fastapi import APIRouter
from app.schemas import ProductDetail
from app.services.product_service import ProductService

router = APIRouter()

# Type the service instance
product_service: ProductService = ProductService()


@router.get(
    "/{product_id}",
    response_model=ProductDetail,
    tags=["Products"],
    summary="Get Product",
    description="Retrieve product details by product ID.",
    responses={
        404: {
            "description": "Product not found",
            "content": {
                "application/json": {"example": {"detail": "Product not found"}}
            },
        },
        500: {
            "description": "Internal server error",
            "content": {
                "application/json": {
                    "example": {"detail": "Internal error: <error message>"}
                }
            },
        },
    },
)
def get_product(product_id: str) -> ProductDetail:
    """
    API endpoint to get product details.
    """
    return product_service.get_product_by_id(product_id)


@router.get(
    "",
    response_model=list[ProductDetail],
    tags=["Products"],
    summary="List Products",
    description="Retrieve a paginated list of products.",
    responses={
        200: {
            "description": "Successful response",
        },
        500: {
            "description": "Internal server error",
            "content": {
                "application/json": {
                    "example": {"detail": "Internal error: <error message>"}
                }
            },
        },
    },
)
def list_products(page: int = 1, size: int = 10) -> list[ProductDetail]:
    """
    API endpoint to list products with pagination.
    """
    return product_service.list_products(page=page, size=size)
