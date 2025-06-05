from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response
from typing import Callable, Awaitable

EXCLUDED_PATHS = [
    "/.well-known/appspecific/com.chrome.devtools.json",
]


class LogFilterMiddleware(BaseHTTPMiddleware):
    async def dispatch(
        self,
        request: Request,
        call_next: Callable[[Request], Awaitable[Response]],
    ) -> Response:
        if request.url.path not in EXCLUDED_PATHS:
            print(f"[REQUEST] {request.method} {request.url.path}")
        response = await call_next(request)
        return response
