exports.parseQuery = (query) => {
  const filter = {};

  if (query) {
    query.split("&").forEach((current) => {
      const [k, v] = current.split("=");
      filter[k] = v.slice(1, -1);
    });
  }

  filter.price = {
    $gte: Number(filter.priceFrom) || 0,
    $lte: Number(filter.priceUpTo) || 100000000,
  };
  filter.year = {
    $gte: Number(filter.yearFrom) || 0,
    $lte: Number(filter.yearUpTo) || Number(new Date().getFullYear()),
  };

  filter.power = { $lte: Number(filter.maxPower) || 2500 };
  filter.cubicCapacity = { $lte: Number(filter.cubicCapacity) || 10000 };
  filter.mileage = { $lte: Number(filter.maxMileage) || 10000000 };

  return filter;
};

exports.parseSort = (sort) => {
  let sorter = "";
  if (sort === "latest") {
    sorter = { createdAt: -1 };
  }
  if (sort === "oldest") {
    sorter = { createdAt: 1 };
  }
  if (sort === "yearAsc") {
    sorter = { year: 1 };
  }
  if (sort === "yearDes") {
    sorter = { year: -1 };
  }
  if (sort === "priceAsc") {
    sorter = { price: 1 };
  }
  if (sort === "priceDes") {
    sorter = { price: -1 };
  }
  return sorter;
};

exports.parseError = (error) => {
  if(error.name === 'ValidationError'){
      return Object.values(error.errors).map(v => v.message).join('\n');
  }else{
      return error.message;
  }
};
