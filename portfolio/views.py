from django.shortcuts import render, HttpResponse
from .models import Project

from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string
# Create your views here.

def index(request):
    projects = Project.objects.order_by('-id')
    return render(request, "portfolio/index.html",{"projects": projects})


def sendEmail(request):

    if request.method == 'POST':
        template = render_to_string('portfolio/email_template.html',{
            'name': request.POST['name'],
            'email': request.POST['email'],
            'message': request.POST['message'],
        })

        email = EmailMessage(
            request.POST['subject'],
            template,
            settings.EMAIL_HOST_USER,
            ['ashishjaiswar8655@gmail.com']
        )

        email.fail_silently=False
        email.send()
    return HttpResponse("Email Send sucessfully")