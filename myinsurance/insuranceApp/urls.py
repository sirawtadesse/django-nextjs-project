from django.urls import path

from .views import insurance_app_proposal_create, proposal_list, claim_create, claim_list, register, login_view, user_list, blog_posts

urlpatterns = [
    path('api/proposals/', insurance_app_proposal_create, name='proposal-create'),
    path('proposals/', proposal_list, name='proposal-list'),
    path('api/claims/', claim_create, name='claim-create'),
    path('claims/', claim_list, name='claim-list'),  # New URL for listing claims
    path('api/register/', register, name='register'),
    path('api/login/', login_view, name='login'),
    path('api/users/', user_list, name='user-list'),
    path('api/blog/', blog_posts, name='blog_posts'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
