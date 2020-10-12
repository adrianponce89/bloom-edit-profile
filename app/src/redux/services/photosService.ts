async function getMembers() {
  try {
    const response = await fetch(`http://10.0.2.2:3000/member`);
    const json = await response.json();
    return json;
  } catch (err) {
    return Promise.reject(err);
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
  try {
    const response = await fetch(
      `http://10.0.2.2:3000/member/${memberId}/photos`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      },
    );
    const json = await response.json();
    return json;
  } catch (err) {
    return Promise.reject(err);
  }
}

async function updatePhoto(photoId: Number, query: PhotoQuery) {
  try {
    const response = await fetch(`http://10.0.2.2:3000/photos/${photoId}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    });

    const json = await response.json();
    return json;
  } catch (err) {
    return Promise.reject(err);
  }
}

async function deletePhoto(photoId: Number) {
  try {
    const response = await fetch(`http://10.0.2.2:3000/photos/${photoId}`, {
      method: 'DELETE ',
    });

    const json = await response.json();
    return json;
  } catch (err) {
    return Promise.reject(err);
  }
}

export default {
  getMembers,
  getMemberPhotos,
  addMemberPhoto,
  updatePhoto,
  deletePhoto,
};
