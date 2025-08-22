from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Delete existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        Leaderboard.objects.all().delete()


        # Create teams
        marvel = Team.objects.create(team_id='team_marvel', name='Marvel')
        dc = Team.objects.create(team_id='team_dc', name='DC')

        # Create users
        users = [
            User(user_id='user_spiderman', name='Spider-Man', email='spiderman@marvel.com', team_id=marvel.team_id),
            User(user_id='user_ironman', name='Iron Man', email='ironman@marvel.com', team_id=marvel.team_id),
            User(user_id='user_wonderwoman', name='Wonder Woman', email='wonderwoman@dc.com', team_id=dc.team_id),
            User(user_id='user_batman', name='Batman', email='batman@dc.com', team_id=dc.team_id),
        ]
        for user in users:
            user.save()

        # Create activities
        Activity.objects.create(activity_id='activity1', user_id=users[0].user_id, type='Running', duration=30, calories=300, date='2025-08-20')
        Activity.objects.create(activity_id='activity2', user_id=users[1].user_id, type='Cycling', duration=45, calories=450, date='2025-08-21')
        Activity.objects.create(activity_id='activity3', user_id=users[2].user_id, type='Swimming', duration=60, calories=600, date='2025-08-22')
        Activity.objects.create(activity_id='activity4', user_id=users[3].user_id, type='Yoga', duration=40, calories=200, date='2025-08-22')

        # Create workouts
        workout1 = Workout.objects.create(workout_id='workout1', name='Hero HIIT', description='High intensity interval training for heroes.', suggested_for=[users[0].user_id, users[1].user_id])
        workout2 = Workout.objects.create(workout_id='workout2', name='Power Yoga', description='Yoga for strength and flexibility.', suggested_for=[users[2].user_id, users[3].user_id])

        # Create leaderboard
        Leaderboard.objects.create(leaderboard_id='lb_marvel', team_id=marvel.team_id, points=750)
        Leaderboard.objects.create(leaderboard_id='lb_dc', team_id=dc.team_id, points=800)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
