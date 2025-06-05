from fastapi import APIRouter

router = APIRouter()


@router.get(
    "/",
    tags=["Operations"],
    summary="Health Check",
    description="Health check endpoint to verify the API is running.",
    responses={
        200: {
            "description": "API is healthy",
            "content": {
                "application/json": {"example": {"status": "ok", "version": "0.0.1"}}
            },
        },
    },
)
def health_check() -> dict[str, str]:
    """
    Health check endpoint to verify the API is running.
    """
    return {"status": "ok", "version": "0.0.1"}
