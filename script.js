(() => {
  const searchForm = document.querySelector('#event-search-form');
  const searchInput = document.querySelector('#event-search');
  const clearButton = document.querySelector('#clear-search');
  const eventList = document.querySelector('#event-list');
  const eventCount = document.querySelector('#event-count');
  const emptyMessage = document.querySelector('#event-empty');

  if (!searchForm || !searchInput || !clearButton || !eventList || !eventCount || !emptyMessage) return;

  const eventCards = Array.from(eventList.querySelectorAll('article'));

  function filterEvents() {
    const query = searchInput.value.trim().toLocaleLowerCase('tr-TR');
    let visibleCount = 0;

    eventCards.forEach((card) => {
      const matches = card.textContent.toLocaleLowerCase('tr-TR').includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    eventCount.textContent = `${visibleCount} etkinlik gösteriliyor.`;
    eventList.hidden = visibleCount === 0;
    emptyMessage.hidden = visibleCount !== 0;
  }

  searchForm.addEventListener('submit', (event) => event.preventDefault());
  searchInput.addEventListener('input', filterEvents);
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    filterEvents();
    searchInput.focus();
  });

  filterEvents();
})();
