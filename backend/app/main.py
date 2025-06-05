
from fastapi import FastAPI
from fastapi.responses import RedirectResponse, Response
from fastapi.middleware.cors import CORSMiddleware
from app.middleware.log_filter import LogFilterMiddleware
from app.routes import products, health
from app.config import settings


description = """
RESTful API for displaying product details.  
Technical challenge inspired by Mercado Livre.

Developed by [Edmilson Alferes](https://ed.alpheres.cloud) 🚀
"""

app = FastAPI(
    title="Mercado Livre Challenge API",
    description=description,
    version="0.0.1",
    contact={
        "name": "Edmilson Alferes",
        "email": "edmilson.alferes@gmail.com",
        "url": "https://ed.alpheres.cloud/",
    },
)


# Register middleware
app.add_middleware(LogFilterMiddleware)


# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes
app.include_router(products.router, prefix="/v1/products", tags=["Products"])
app.include_router(health.router, prefix="/v1/health", tags=["Operations"])


@app.get("/", include_in_schema=False)
def root_redirect() -> Response:
    """
    Redirect root path to health check.
    """
    return RedirectResponse(url="/v1/health", status_code=302)
