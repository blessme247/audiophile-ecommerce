
export const splitText = (text: string)=> {
    const index = text.indexOf("<br /> <br />");
  
    if (index === -1) {
      // If the "<br><br/>" tags are not found, return an error or handle it as needed.
      return { firstPart: text, secondPart: '' };
    }
  
    const firstPart = text.substring(0, index);
    const secondPart = text.substring(index + 13); // 11 is the length of "<br /><br />"
  
    return { firstPart, secondPart };
  }
  
  