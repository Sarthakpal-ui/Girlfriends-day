new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "memory1.jpg",
          img2: "memory2.jpg",
          img3: "memory3.jpg",
          title: "Forever",
          isOpen: false,
        },
        {
          img1: "memory4.jpg",
          img2: "memory5.jpg",
          img3: "memory6.jpg",
          title: "Will",
          isOpen: false,
        },
        {
          img1: "memory7.jpg",
          img2: "memory8.jpg",
          img3: "memory9.jpg",
          title: "Choose",
          isOpen: false,
        },
        {
          img1: "memory10.jpg",
          img2: "memory11.jpg",
          img3: "memory12.jpg",
          title: "Only",
          isOpen: false,
        },
        {
          img1: "memory16.jpg",
          img2: "memory14.jpg",
          img3: "memory15.jpg",
          title: "You",
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
