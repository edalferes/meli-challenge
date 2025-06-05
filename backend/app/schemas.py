from pydantic import BaseModel
from typing import List


class SellerInfo(BaseModel):
    name: str
    rating: float


class ProductDetail(BaseModel):
    id: str
    title: str
    description: str
    price: float
    payment_methods: List[str]
    seller: SellerInfo
    stock: int
    images: List[str]
