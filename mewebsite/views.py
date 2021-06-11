from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
def index(request):
    return render(request, 'index.html', {})

def contact(request):
    if request.method == "POST":
        message_name_first = request.POST['message-name-first']
        message_name_last = request.POST['message-name-last']
        message_email_sender = request.POST['message-email-sender']
        mobil_No_sender = request.POST['mobil-No-sender']
        message = request.POST['message']
        
        # Send an Email
        send_mail(
            message_name_first, # Subject
            message, # Message
            message_email_sender, # From_Email
            ['hamdeedf@gmail.com'],      # To-Email-Target
        )
        return render(request, 'contact.html', { 'message_name_first': message_name_first })
    else:
        return render(request, 'contact.html', {})
    
