# Generated by Django 3.0.7 on 2020-08-11 10:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_visitedurl'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlayerAgreeDisagree',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player_name', models.CharField(max_length=150)),
                ('date', models.DateField()),
                ('agree_score', models.IntegerField()),
                ('disagree_score', models.IntegerField()),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='player_agree_disagree', to='main.Player')),
            ],
            options={
                'ordering': ['date', 'player_name', 'agree_score', 'disagree_score'],
            },
        ),
        migrations.CreateModel(
            name='ClubAgreeDisagree',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('club_name', models.CharField(max_length=150)),
                ('date', models.DateField()),
                ('agree_score', models.IntegerField()),
                ('disagree_score', models.IntegerField()),
                ('club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='club_agree_disagree', to='main.Club')),
            ],
            options={
                'ordering': ['date', 'club_name', 'agree_score', 'disagree_score'],
            },
        ),
    ]