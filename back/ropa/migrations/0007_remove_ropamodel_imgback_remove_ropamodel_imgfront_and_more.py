# Generated by Django 4.2 on 2023-04-17 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ropa', '0006_rename_back_picture_ropamodel_imgback_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ropamodel',
            name='imgBack',
        ),
        migrations.RemoveField(
            model_name='ropamodel',
            name='imgFront',
        ),
        migrations.AddField(
            model_name='ropamodel',
            name='imgs',
            field=models.IntegerField(default=False),
            preserve_default=False,
        ),
    ]
