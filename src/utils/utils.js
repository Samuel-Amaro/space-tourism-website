
export default function replaceBg(newValue) {
    document
      .querySelector(".Body-Page")
      .classList.replace(
        document.querySelector(".Body-Page").classList[
          document.querySelector(".Body-Page").classList.length - 1
        ], newValue
      );
}