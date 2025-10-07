from rest_framework.decorators import api_view
from rest_framework.response import Response
from tallydata.models import TallyDataInventoryMaster, TallyDataAccountMaster, TallyDataCostCentre
import time

@api_view(['POST'])
def inventorymaster(request):
    data = request.data

    start = time.time()
    items = TallyDataInventoryMaster.objects.all().values()

    if data.get('parent'):
        items = items.filter(parent=data['parent']).values()
    end = time.time()
    return Response({'status': 'success', 'message': f"Query execution time: {end - start} sec", 'data': list(items)})

@api_view(['POST'])
def accountmaster(request):
    primary_group = request.data["primary_group"]

    start = time.time()
    ledgers = TallyDataAccountMaster.objects.filter(primary_group=primary_group).values()
    end = time.time()

    return Response({'status': 'success', 'message': f"Query execution time: {end - start} sec", 'data': list(ledgers)})

@api_view(['POST'])
def costcentre(request):
    parent = request.data["parent"]

    start = time.time()
    cc = TallyDataCostCentre.objects.filter(parent=parent).values()
    end = time.time()

    return Response({'status': 'success', 'message': f"Query execution time: {end - start} sec", 'data': list(cc)})

@api_view(['POST'])
def costcentre_grouped(request):

    cost_centres = TallyDataCostCentre.objects.values('parent', 'name')

    data = {}
    for item in cost_centres:
        parent = item['parent'].lower()
        name = item['name']

        if parent not in data:
            data[parent] = []

        data[parent].append({"name":name})

    return Response({'status': 'success', 'data': data})

