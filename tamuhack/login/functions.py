# from curses.ascii import US
from login.models import User

def user_exists(email: str) -> bool:
    pass


def add_new_user(email: str) -> None:
    User.objects.create(email=email)