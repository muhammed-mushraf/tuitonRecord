from django.db import models

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=150, null=False, blank=False)
    roll_no = models.DecimalField( max_digits=6, decimal_places=0, null=False)
    address = models.TextField()
    standard = models.CharField( max_length=50, null=True, blank=True)
    # date = models.DateTimeField( auto_now_add=True)
    image = models.ImageField( upload_to='uploads/images',null=True, blank=True)


    def __str__(self):
        return self.name
    