from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.views.decorators.http import require_POST

# Create your views here.

# 유저 정보를 조회하기 위한 추가 코드 (제이슨 형식으로 리턴)
@require_POST
def profile(request, username):
    person = get_object_or_404(get_user_model(), username=username)
    return JsonResponse({
        'username': person.username,
        'nickname': person.nickname,
        'profile_path': person.profile_path,
    })