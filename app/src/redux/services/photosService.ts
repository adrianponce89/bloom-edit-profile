async function getMembers() {
  const res = await fetch(`http://10.0.2.2:3000/member`);
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

async function getMemberPhotos(memberId: Number) {
  try {
    const response = await fetch(
      `http://10.0.2.2:3000/member/${memberId}/photos`,
    );
    const json = await response.json();
    return json;
  } catch (err) {
    return Promise.reject(err);
  }
}

type PhotoQuery = {
  url: String;
  position: Number;
  width: Number;
  height: Number;
  centerX: Number;
  centerY: Number;
};

async function addMemberPhoto(memberId: Number, query: PhotoQuery) {
  const res = await fetch(`http://10.0.2.2:3000/member/${memberId}/photos`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  });

  const resJson = await res.json();
  if (res.status === 201) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

async function updatePhoto(photoId: Number, query: PhotoQuery) {
  const res = await fetch(`http://10.0.2.2:3000/photos/${photoId}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  });

  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

async function deletePhoto(photoId: Number) {
  const res = await fetch(`http://10.0.2.2:3000/photos/${photoId}`, {
    method: 'DELETE ',
  });

  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

export default {
  getMembers,
  getMemberPhotos,
  addMemberPhoto,
  updatePhoto,
  deletePhoto,
};
