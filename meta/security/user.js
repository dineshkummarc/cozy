var user = {
  john: {
    can: {
      read: {
        books: true,
        authors: true
      },
      add: {
        books: true,
        authors: true
      }
    },
    has: {
      role: {
        editor: true,
        administrator: true
      }
    }
  },
  mary: {
    can: {
      read: {
        authors: true
      },
      add: {
        authors: true
      }
    },
    has: {
      role: {
        editor: true
      }
    }
  }
};
