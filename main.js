(()=>{"use strict";var e={selectorForm:".popup__form",selectorInput:".popup__input",selectorButton:".popup__button",selectorError:".popup__error",classButtonDisabled:"popup__button_disabled",classInputTypeError:"popup__input_type_error",classErrorVisible:"popup__error_visible"},t=document.querySelector(".popup_profile-changer"),r=document.querySelector(".profile__edit-button"),n=t.querySelector(".popup__form"),o=n.querySelector(".popup__input_text_name"),i=n.querySelector(".popup__input_text_job"),u=document.querySelector(".popup_add-new-card"),l=document.querySelector(".profile__add-button"),c=u.querySelector(".popup__form"),a=document.querySelector(".profile__edit-avatar"),s=document.querySelector(".popup_avatar-changer").querySelector(".popup__form"),f=(document.querySelector(".profile__avatar"),Array.from(document.querySelectorAll(".popup")),Array.from(document.querySelectorAll(".popup__form"))),p=(document.querySelector(".profile__profile-name"),document.querySelector(".profile__profile-job"),document.querySelector(".profile__avatar"),{});function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var m=function(){function e(t,r,n,o,i,u,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._templateSelector=r,this._handleCardClick=n,this._handleCardDelete=o,this._handlePutLike=i,this._handleDeleteLike=u,this._ownerId=l}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return this._cardTemplate=document.querySelector(this._templateSelector).content.querySelector(".template-element").cloneNode(!0),this._cardTemplate}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){return e._likeCard()})),null!==this._buttonDelete&&this._buttonDelete.addEventListener("click",(function(){e._handleCardDelete(e)})),this._elementTopSide.addEventListener("click",(function(){return e._handleCardClick(e._data)}))}},{key:"_likeCard",value:function(){this._buttonLike.classList.toggle("elements__button-like_active"),this._buttonLike.classList.contains("elements__button-like_active")?(this._handlePutLike(this._id),this._likeNumber.textContent=Number(this._likeNumber.textContent)+1):(this._handleDeleteLike(this._id),this._likeNumber.textContent=Number(this._likeNumber.textContent)-1)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_isMine",value:function(){return this._data.owner._id===this._ownerId}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._buttonLike=this._element.querySelector(".elements__button-like"),this._buttonDelete=this._element.querySelector(".elements__button-delete"),this._elementTopSide=this._element.querySelector(".elements__top-side"),this._element.querySelector(".elements__caption").textContent=this._name,this._elementTopSide.src=this._link,this._elementTopSide.alt="Фото - ".concat(this._name),this._likeNumber=this._element.querySelector(".elements__like-number"),this._likeNumber.textContent=this._likes.length,this._likes.some((function(t){return t._id===e._ownerId}))&&this._buttonLike.classList.add("elements__button-like_active"),this._isMine()||this._buttonDelete.remove(),this._setEventListeners(),this._element}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var b=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._selectors=r,this._selectorInput=r.selectorInput,this._selectorButton=r.selectorButton,this._selectorError=r.selectorError,this._classButtonDisabled=r.classButtonDisabled,this._classInputTypeError=r.classInputTypeError,this._classErrorVisible=r.classErrorVisible,this._buttonElement=this._formElement.querySelector(this._selectorButton),this._inputList=Array.from(this._formElement.querySelectorAll(this._selectorInput))}var t,r;return t=e,(r=[{key:"deleteValidityErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideErrorMessage(t)}))}},{key:"disableButtonSubmit",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._classButtonDisabled)}},{key:"enableValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isInputValid(t),e._toggleButtonSubmit()}))}))}},{key:"_isInputValid",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e)}},{key:"_showErrorMessage",value:function(e){this._popupError=this._formElement.querySelector(".".concat(e.name,"-error")),e.classList.add(this._classInputTypeError),this._popupError.textContent=e.validationMessage,this._popupError.classList.add(this._classErrorVisible)}},{key:"_hideErrorMessage",value:function(e){this._popupError=this._formElement.querySelector(".".concat(e.name,"-error")),e.classList.remove(this._classInputTypeError),this._popupError.textContent="",this._popupError.classList.remove(this._classErrorVisible)}},{key:"_toggleButtonSubmit",value:function(){this._isFormInputsValid()?this.disableButtonSubmit():(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._classButtonDisabled))}},{key:"_isFormInputsValid",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var g=function(){function e(t,r){var n=t.items,o=t.renderItems;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=n,this._renderItems=o,this._selector=r,this._elementContainer=document.querySelector(this._selector)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._items.slice().reverse().forEach((function(t){return e._renderItems(t)}))}},{key:"addItem",value:function(e){this._elementContainer.prepend(e)}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._buttonClose.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=L(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},O.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function I(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(n);if(o){var r=T(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPhotoRevealImageBig=t._popup.querySelector(".popup__image-big"),t._popupPhotoRevealImageCaption=t._popup.querySelector(".popup__image-caption"),t}return t=u,(r=[{key:"open",value:function(e){this._popupPhotoRevealImageBig.src=e.link,this._popupPhotoRevealImageCaption.textContent=e.name,this._popupPhotoRevealImageBig.alt="Фото в увеличенном виде - ".concat(e.link),O(T(u.prototype),"open",this).call(this)}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}var x=function(){function e(t){var r=t.selectorName,n=t.selectorInfo,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(r),this._profileJob=document.querySelector(n),this._profileAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){var e={};return e.name=this._profileName.textContent,e.info=this._profileJob.textContent,e}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userInfo,n=e.userAvatar;t&&(this._profileName.textContent=t),r&&(this._profileJob.textContent=r),n&&(this._profileAvatar.src=n)}}])&&R(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=V(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},A.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function M(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(n);if(o){var r=J(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return M(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitForm=t,r._formElement=r._popup.querySelector(".popup__form"),r._inputList=Array.from(r._popup.querySelectorAll(".popup__input")),r._button=r._formElement.querySelector(".popup__button"),r}return t=u,(r=[{key:"close",value:function(){A(J(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._objWithInfo={},this._inputList.forEach((function(t){e._objWithInfo[t.name]=t.value})),this._objWithInfo}},{key:"setEventListeners",value:function(){var e=this;A(J(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"downloadButton",value:function(e){this._button.textContent=e?"Сохранение...":"Сохранить"}}])&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==W(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===W(o)?o:String(o)),n)}var o}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=z(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},H.apply(this,arguments)}function z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(n);if(o){var r=X(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._formElement=t._popup.querySelector(".popup__form"),t}return t=u,(r=[{key:"setEventListeners",value:function(e){H(X(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}}])&&G(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Z(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===Z(o)?o:String(o)),n)}var o}var ee=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,r;return t=e,(r=[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}},{key:"getUserInfoServer",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkStatus(t)}))}},{key:"getCardsServer",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkStatus(t)}))}},{key:"setUserInfoServer",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e["popup-text-name"],about:e["popup-text-job"]})}).then((function(e){return t._checkStatus(e)}))}},{key:"setUserAvatarServer",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkStatus(e)}))}},{key:"postNewCardServer",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkStatus(e)}))}},{key:"postLikeServer",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkStatus(e)}))}},{key:"deleteLikeServer",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkStatus(e)}))}},{key:"deleteCardServer",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkStatus(e)}))}}])&&$(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function te(e,t){return new m(e,"#template-element",re,ne,oe,ie,t).generateCard()}r.addEventListener("click",(function(){var e=ue.getUserInfo();o.value=e.name,i.value=e.info,p[n.name].deleteValidityErrors(),p[n.name].disableButtonSubmit(),ae.open()})),l.addEventListener("click",(function(){p[c.name].deleteValidityErrors(),p[c.name].disableButtonSubmit(),ce.open()})),a.addEventListener("click",(function(){p[s.name].deleteValidityErrors(),p[s.name].disableButtonSubmit(),se.open()}));var re=function(e){le.open(e)},ne=function(e){fe.open(),fe.setEventListeners((function(){pe.deleteCardServer(e._id).then((function(){e.deleteCard(),fe.close()})).catch((function(e){console.log(e)}))}))},oe=function(e){pe.postLikeServer(e).catch((function(e){console.log(e)}))},ie=function(e){pe.deleteLikeServer(e).catch((function(e){console.log(e)}))};f.forEach((function(t){p[t.name]=new b(t,e),p[t.name].enableValidation()}));var ue=new x({selectorName:".profile__profile-name",selectorInfo:".profile__profile-job",selectorAvatar:".profile__avatar"}),le=new q(".popup_photo");le.setEventListeners();var ce=new F(".popup_add-new-card",(function(e){ce.downloadButton(!0),pe.postNewCardServer(e).then((function(e){new g({items:e},".elements__list").addItem(te(e)),ce.close()})).catch((function(e){console.log(e)})).finally((function(){ce.downloadButton(!1)}))}));ce.setEventListeners();var ae=new F(".popup_profile-changer",(function(e){ae.downloadButton(!0),pe.setUserInfoServer(e).then((function(){ue.setUserInfo({userName:e["popup-text-name"],userInfo:e["popup-text-job"]}),ae.close()})).catch((function(e){console.log(e)})).finally((function(){ae.downloadButton(!1)}))}));ae.setEventListeners();var se=new F(".popup_avatar-changer",(function(e){se.downloadButton(!0),pe.setUserAvatarServer(e["link-avatar"]).then((function(){ue.setUserInfo({userAvatar:e["link-avatar"]}),se.close()})).catch((function(e){console.log(e)})).finally((function(){se.downloadButton(!1)}))}));se.setEventListeners();var fe=new Y(".popup_submit"),pe=new ee({url:"https://nomoreparties.co/v1/cohort-57",headers:{authorization:"4873e823-ccc0-45af-addc-f805bcf9ef38","Content-Type":"application/json"}});Promise.all([pe.getUserInfoServer(),pe.getCardsServer()]).then((function(e){ue.setUserInfo({userName:e[0].name,userInfo:e[0].about,userAvatar:e[0].avatar});var t=new g({items:e[1],renderItems:function(r){t.addItem(te(r,e[0]._id))}},".elements__list");t.renderItems()}))})();
//# sourceMappingURL=main.js.map