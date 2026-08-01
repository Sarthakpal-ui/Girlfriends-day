new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "album-01.jpg",
          img2: "album-02.jpg",
          img3: "album-03.jpg",
          title: "Forever",
          isOpen: false,
        },
        {
          img1: "album-04.jpg",
          img2: "album-05.jpg",
          img3: "album-06.jpg",
          title: "Will",
          isOpen: false,
        },
        {
          img1: "album-07.jpg",
          img2: "album-08.jpg",
          img3: "album-09.jpg",
          title: "Choose",
          isOpen: false,
        },
        {
          img1: "album-10.jpg",
          img2: "album-11.jpg",
          img3: "album-12.jpg",
          title: "Only You",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
