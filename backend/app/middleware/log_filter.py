# app/middleware/log_filter.py

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request

EXCLUDED_PATHS = [
    "/.well-known/appspecific/com.chrome.devtools.json",
    # você pode adicionar outras se quiser
]


class LogFilterMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        if request.url.path not in EXCLUDED_PATHS:
            # ou use logger.info()
            print(f"[REQUEST] {request.method} {request.url.path}")
        response = await call_next(request)
        return response
