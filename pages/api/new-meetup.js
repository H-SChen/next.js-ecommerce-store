// path = /api/new-meetup

// only execute, if we receive a incoming POST req. to this route.

function dataHandler(req, res) {
  // POST /api/new-meetup
  if (req.method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;
  }
}
