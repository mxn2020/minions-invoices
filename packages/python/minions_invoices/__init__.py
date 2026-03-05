"""
Minions Invoices Python SDK

Invoice generation, payment tracking, due dates, and billing status for agency clients
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Invoices.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
