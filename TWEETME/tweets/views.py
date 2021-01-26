from django.http import JsonResponse
from django.conf import settings
from django.utils.http import is_safe_url
from django.shortcuts import render, redirect


ALLOWED_HOSTS = settings.ALLOWED_HOSTS


def home_view(request, *args, **kwargs):
    username=None
    if request.user.is_authenticated:
        username = request.user.username
    return render(request, "tweets/home.html", context={}, status=200)

def tweets_list_view(request, *args, **kwargs):
    return render(request, "tweets/list.html")

def tweets_detail_view(request, tweets_id, *args, **kwargs):
    return render(request, "tweets/detail.html", context={"tweet_id":tweets_id})

def tweets_profile_view(request,username, *args, **kwargs):
    return render(request, "tweets/profile.html", context={"profile_username":username})




# def tweet_create_view_pure_django(request, *args, **kwargs):
#     user = request.user
#     if not request.user.is_authenticated:
#         user = None
#         if request.is_ajax():
#             return JsonResponse({}, status=403)
#         return redirect(settings.LOGIN_URL)
#     form = TweetForm(request.POST or None)
#     next_url = request.POST.get("next") or None
#     if form.is_valid():
#         obj = form.save(commit=False)
#         obj.user = user
#         obj.save()
#         if request.is_ajax():
#             return JsonResponse(obj.serialize(), status=201)
#         if next_url is not None and is_safe_url(next_url, ALLOWED_HOSTS):
#             return redirect(next_url)
#         form = TweetForm()
#     if form.errors:
#         if request.is_ajax():
#             return JsonResponse(form.errors, status=400)
#     return render(request, 'components/form.html', context={"form": form})


# def tweet_list_view_pure_django(request, *args, **kwargs):
#     qs = Tweet.objects.all()
#     tweet_list = [x.serialize() for x in qs]
#     data = {
#         "isUser": False,
#         "response": tweet_list
#     }
#     return JsonResponse(data)


# def tweet_detail_view_pure_django(request, id, *args, **kwargs):
#     data = {
#         "id": id,

#     }
#     status = 200
#     try:
#         obj = Tweet.objects.get(id=id)
#         data['content'] = obj.content
#     except:
#         data['message'] = "not found"
#         status = 404

#     return JsonResponse(data, status=status)
