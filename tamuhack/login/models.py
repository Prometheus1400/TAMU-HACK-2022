from django.db import models

# Create your models here.


class User(models.Model):
    def __str__(self):
        return self.email

    email = models.CharField(max_length=50)
    Netflix = models.BooleanField(default=False)
    Amazon_Prime = models.BooleanField(default=False)
    Spotify = models.BooleanField(default=False)
    Apple_Music = models.BooleanField(default=False)
    Hulu = models.BooleanField(default=False)
    Costco = models.BooleanField(default=False)
    HBO = models.BooleanField(default=False)
    Youtube_Premium = models.BooleanField(default=False)
    Disney_Plus = models.BooleanField(default=False)
    iCloud = models.BooleanField(default=False)
    Google_Drive = models.BooleanField(default=False)
    OneDrive = models.BooleanField(default=False)
    Dropbox = models.BooleanField(default=False)

    def to_dict(self):
        return {
            "Email": self.email,
            "Netflix": self.Netflix,
            "Amazon_Prime": self.Amazon_Prime,
            "Spotify": self.Spotify,
            "Apple_Music": self.Apple_Music,
            "Hulu": self.Hulu,
            "Costco": self.Costco,
            "HBO": self.HBO,
            "Youtube_Premium": self.Youtube_Premium,
            "Disney_Plus": self.Disney_Plus,
            "iCloud": self.iCloud,
            "Google_Drive": self.Google_Drive,
            "OneDrive": self.OneDrive,
            "Dropbox": self.Dropbox
        }
