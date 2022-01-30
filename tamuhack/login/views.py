import email
from django.shortcuts import render
from django.http import HttpResponse
from . import functions
from login.models import User
from django.http import JsonResponse


# Create your views here.


def handle_login(request):
    # logic to handle new user here
    email = request['email']
    # email = 'temp1@gmail.com'

    users = User.objects.filter(email=email)

    if len(users) == 0:
        user = User.objects.create(email=email)
    else:
        user = users[0]

    # user is now the desired user instance
    json_resp = JsonResponse(user.to_dict())

    return json_resp


def update_user(request):
    # request = request.data

    Email = request['email']
    Netflix = request['Netflix']
    Amazon_Prime = request['Amazon_Prime']
    Spotify = request['Spotify']
    Apple_Music = request['Apple_Music']
    Hulu = request['Hulu']
    Costco = request['Costco']
    HBO = request['HBO']
    Youtube_Premium = request['Youtube_Premium']
    Disney_Plus = request['Disney_Plus']
    iCloud = request['iCloud']
    Google_Drive = request['Google_Drive']
    OneDrive = request['OneDrive']
    Dropbox = request['Dropbox']
    # Email = 'temp@gmail.com'
    # Netflix = True
    # Amazon_Prime = True
    # Spotify = True
    # Apple_Music = True
    # Hulu = True
    # Costco = True
    # HBO = True
    # Youtube_Premium = True
    # Disney_Plus = True
    # iCloud = True
    # Google_Drive = True
    # OneDrive = True
    # Dropbox = True

    # users = User.objects.filter(email=Email)

    # if len(users) == 0:
    #     print("ERROR USER DOES NOT EXIST")
    # else:
    #     user = users[0]
    # user.entry_set.set([Email, Netflix, Amazon_Prime, Spotify, Apple_Music, Hulu, Costco,
    #                    HBO, Youtube_Premium, Disney_Plus, iCloud, Google_Drive, OneDrive, Dropbox])
    User.objects.filter(email=Email).update(Netflix=Netflix, Amazon_Prime=Amazon_Prime,
                                            Spotify=Spotify, Apple_Music=Apple_Music,
                                            Hulu=Hulu, Costco=Costco,
                                            HBO=HBO, Youtube_Premium=Youtube_Premium,
                                            Disney_Plus=Disney_Plus, iCloud=iCloud,
                                            Google_Drive=Google_Drive, OneDrive=OneDrive, 
                                            Dropbox=Dropbox)


    return HttpResponse(200)
