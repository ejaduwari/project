// app/collection/page.js
import Link from 'next/link';

async function getWorkouts() {
  const res = await fetch('http://localhost:4000/workouts');
  const data = await res.json();
  return data;
}

export default async function CollectionPage() {
  const workouts = await getWorkouts();

  return (
    <main>
      <h1>Workout Logs</h1>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <strong>ID:</strong> {workout.id} <br />
            <strong>Exercise:</strong> {workout.exerciseName} <br />
            <Link href={`/collection/${workout.id}`}>more</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
