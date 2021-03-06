let REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

let workQueue = new Queue('work', REDIS_URL);
//and kicking off the job when a POST request comes in:

app.post('/job', async (req, res) => {
  let job = await workQueue.add();
  res.json({ id: job.id });
});
