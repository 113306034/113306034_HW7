document.addEventListener('DOMContentLoaded', () => {
  let isEditing = false;
  const profileNameElement = document.getElementById('profile-name');
  const editNameBtn = document.getElementById('edit-name-btn');
  const musicFormContainer = document.getElementById('music-form-container');
  const addMusicBtn = document.getElementById('add-music-btn');
  const musicForm = document.getElementById('music-form');
  const musicList = document.getElementById('music-list');

  // 編輯名稱功能
  editNameBtn.addEventListener('click', () => {
    if (isEditing) {
      const nameInput = document.getElementById('name-input');
      profileNameElement.textContent = nameInput.value;
      editNameBtn.textContent = 'Edit';
    } else {
      const currentName = profileNameElement.textContent;
      profileNameElement.innerHTML = `<input type="text" id="name-input" value="${currentName}">`;
      editNameBtn.textContent = 'Save';
    }
    isEditing = !isEditing;
  });

  // 新增音樂功能
  addMusicBtn.addEventListener('click', () => {
    musicFormContainer.style.display = 'block';
  });

  musicForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const musicUrl = document.getElementById('music-url').value;
    const musicName = document.getElementById('music-name').value;

    if (musicUrl && musicName) {
      const newMusicItem = document.createElement('div');
      newMusicItem.innerHTML = `
        <a href="${musicUrl}" target="_blank"><img src="spotify logo.jpg" alt="${musicName}"></a>
        <p>${musicName}</p>
      `;
      musicList.appendChild(newMusicItem);
      musicFormContainer.style.display = 'none';
      musicForm.reset();
    } else {
      alert('Please fill in all fields');
    }
  });
});
