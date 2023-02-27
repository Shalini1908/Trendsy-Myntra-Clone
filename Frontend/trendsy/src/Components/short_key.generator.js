

import shortid from 'shortid';

export const shortID = () => {
    const key = shortid.generate(({ length: 9 }));
    return key
  }

 