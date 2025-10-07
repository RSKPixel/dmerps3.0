from django.db import models

# Create your models here.
class TallyDataInventoryMaster(models.Model):
    id = models.AutoField(primary_key=True)
    stock_item = models.CharField(max_length=100, blank=True, null=True)
    stock_group = models.CharField(max_length=100,blank=True, null=True)
    base_unit = models.CharField(max_length=50, blank=True, null=True)
    additional_unit = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tallydata_inventorymaster'

class TallyDataAccountMaster(models.Model):

    id = models.AutoField(primary_key=True)
    ledger_name = models.CharField(max_length=100, blank=True, null=True)
    address_1 = models.CharField(max_length=100, blank=True, null=True)
    address_2 = models.CharField(max_length=100, blank=True, null=True)
    address_3 = models.CharField(max_length=100, blank=True, null=True)
    address_4 = models.CharField(max_length=100, blank=True, null=True)
    pin_code = models.CharField(max_length=10, blank=True, null=True)
    party_gstin = models.CharField(max_length=15, blank=True, null=True)
    pan = models.CharField(max_length=10, blank=True, null=True)
    primary_group = models.CharField(max_length=100, blank=True, null=True)
    favouring_name = models.CharField(max_length=100, blank=True, null=True)
    account_number = models.CharField(max_length=20, blank=True, null=True)
    bank_code = models.CharField(max_length=10, blank=True, null=True)
    bank_name = models.CharField(max_length=100, blank=True, null=True)
    performance = models.CharField(max_length=100, blank=True, null=True)
    representative = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tallydata_accountmaster'

class TallyDataCostCentre(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    parent = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tallydata_costcentre'

class TallyDataSales(models.Model):

    id = models.AutoField(primary_key=True)
    voucher_no = models.CharField(max_length=100, blank=True, null=True)
    voucher_date = models.DateField(blank=True, null=True)
    ledger_name = models.CharField(max_length=100, blank=True, null=True)
    broker = models.CharField(max_length=100, blank=True, null=True)
    item_count = models.FloatField(blank=True, null=True)
    item_no = models.FloatField(blank=True, null=True)
    stock_item = models.CharField(max_length=100, blank=True, null=True)
    brand = models.CharField(max_length=100, blank=True, null=True)
    packing = models.FloatField(blank=True, null=True)
    qty = models.FloatField(blank=True, null=True)
    rate = models.FloatField(blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)
    discount = models.FloatField(blank=True, null=True)
    cartage = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tallydata_sales'


class TallyDataReceivables(models.Model):

    id = models.AutoField(primary_key=True)
    invoice_no = models.CharField(max_length=100, blank=True, null=True)
    invoice_date = models.DateField(blank=True, null=True)
    ledger_name = models.CharField(max_length=100, blank=True, null=True)
    representative = models.CharField(max_length=100, blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tallydata_receivables'


class TallyDataPurchases(models.Model):

    id = models.AutoField(primary_key=True)
    voucher_no = models.CharField(max_length=100, blank=True, null=True)
    voucher_date = models.DateField(blank=True, null=True)
    ledger_name = models.CharField(max_length=100, blank=True, null=True)
    broker = models.CharField(max_length=100, blank=True, null=True)
    item_count = models.FloatField(blank=True, null=True)
    itemno = models.FloatField(blank=True, null=True)
    stock_item = models.CharField(max_length=100, blank=True, null=True)
    brand = models.CharField(max_length=100, blank=True, null=True)
    packing = models.FloatField(blank=True, null=True)
    qty = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    rate = models.FloatField(blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tallydata_purchases'
