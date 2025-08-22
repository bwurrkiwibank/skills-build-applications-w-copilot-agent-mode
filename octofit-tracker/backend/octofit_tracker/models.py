from django.db import models

class Team(models.Model):
    team_id = models.CharField(max_length=24, primary_key=True)
    name = models.CharField(max_length=100, unique=True)

class User(models.Model):
    user_id = models.CharField(max_length=24, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    team_id = models.CharField(max_length=24)

class Activity(models.Model):
    activity_id = models.CharField(max_length=24, primary_key=True)
    user_id = models.CharField(max_length=24)
    type = models.CharField(max_length=100)
    duration = models.IntegerField()  # minutes
    calories = models.IntegerField()
    date = models.DateField()

class Workout(models.Model):
    workout_id = models.CharField(max_length=24, primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    suggested_for = models.JSONField(default=list, blank=True)

class Leaderboard(models.Model):
    leaderboard_id = models.CharField(max_length=24, primary_key=True)
    team_id = models.CharField(max_length=24)
    points = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Leaderboards'
