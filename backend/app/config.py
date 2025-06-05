# app/config.py

from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # Default CORS origins
    cors_origins: List[str] = ["http://localhost:3000"]

    class Config:
        env_file = ".env"


# Singleton
settings = Settings()
