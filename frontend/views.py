# ================
# Views for front-end site - All will go through 'index.html' template where React is loaded
# ================


from django.shortcuts import render

# Basic view to render React site
def index(request):
    return render(request, 'frontend/index.html')


# Blog view - renders specific blogpost page according to url param
def blog(request, post_name):

	param = request.GET.get(post_name)

	return render(request, 'frontend/index.html', {post_name: param})


# Player page view - renders specific player page according to url param
def playerpage(request, player_name):

	param = request.GET.get(player_name)

	return render(request, 'frontend/index.html', {player_name: param})


# Club page view - renders specific club page according to url param
def clubpage(request, club_name):

	param = request.GET.get(club_name)

	return render(request, 'frontend/index.html', {club_name: param})