from django.shortcuts import render


def index(request):
    return render(request, 'frontend/index.html')



def blog(request, post_name):

	param = request.GET.get(post_name)

	return render(request, 'frontend/index.html', {post_name: param})



def playerpage(request, player_name):

	param = request.GET.get(player_name)

	return render(request, 'frontend/index.html', {player_name: param})



def clubpage(request, club_name):

	param = request.GET.get(club_name)

	return render(request, 'frontend/index.html', {club_name: param})