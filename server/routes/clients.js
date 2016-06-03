export function get(req, res, next) {
  const error = false;

  const data = [
    {
      _id: '1',
      name: 'Alex'
    },
    {
      _id: '2',
      name: 'Oleksiy'
    }
  ];

  if (error) {
    return next(error);
  }

  res.status(200).json(data);
}

export function create(req, res, next) {
  const error = false;

  const data = {
    _id: '100'
  };

  if (error) {
    return next(error);
  }

  res.status(200).json(data);
}

export function update(req, res, next) {
  const error = false;

  if (error) {
    return next(error);
  }

  res.status(200).json();
}

export function remove(req, res, next) {
  const error = false;

  if (error) {
    return next(error);
  }

  res.status(200).json();
}
