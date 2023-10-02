# Infinite Scroll

This is an implementation of the infinite scroll of a list of data which is fetched in chunks whenever the user scrolls to the last item of the page.
- Created a component which takes in the data and RenderListItem.
- Applied IntersectionObserver on the last item of the list
- Now, made an API call to fetch the data whenever the last item on the page is intersecting i.e.(item.isIntersecting === true)
