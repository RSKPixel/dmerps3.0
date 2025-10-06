from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def login(request):
    # Dummy authentication logic for demonstration
    username = request.data.get('username')
    password = request.data.get('password')

    if username == 'admin' and password == 'password':
        return Response({'message': 'Login successful'}, status=200)
    else:
        return Response({'message': 'Invalid credentials'}, status=401)
