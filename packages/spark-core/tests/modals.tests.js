/* global document describe before it */
import { expect } from 'chai';
import {
  // setupModals,
  showModal,
  hideModal,
  getFocusableEls,
  focusFirstModalEl,
  // isTabPressed,
  // isMaskClicked,
  // isEscPressed,
  // setupCancelEl,
  // handleModalEvents,
} from '../components/modals';

describe('Modal tests', () => {
  let triggerDefaultModal;
  let triggerWaitModal;
  let defaultModal;
  let waitModal;
  let modalMask;
  let cancelDefault;
  let containerDiv;
  const HIDE_CLASS = 'sprk-u-Hide';

  before(() => {
    containerDiv = document.createElement('div');

    modalMask = document.createElement('div');
    modalMask.setAttribute('data-sprk-modal', 'mask');
    modalMask.setAttribute('tabindex', '-1');
    modalMask.classList.add('sprk-c-ModalMask', HIDE_CLASS);

    defaultModal = document.createElement('div');
    defaultModal.classList.add('sprk-c-Modal', HIDE_CLASS);
    defaultModal.setAttribute('tabindex', '-1');
    defaultModal.setAttribute('data-sprk-modal', 'exampleDefaultModal');

    waitModal = document.createElement('div');
    waitModal.classList.add('sprk-c-Modal', HIDE_CLASS);
    waitModal.setAttribute('tabindex', '-1');
    waitModal.setAttribute('data-sprk-modal', 'exampleWaitModal');
    waitModal.setAttribute('data-sprk-modal-type', 'wait');

    cancelDefault = document.createElement('a');
    cancelDefault.setAttribute('data-sprk-modal-cancel', 'exampleDefaultModal');
    cancelDefault.textContent = 'Cancel';
    cancelDefault.href = '#';

    triggerDefaultModal = document.createElement('button');
    triggerDefaultModal.setAttribute('data-sprk-modal-trigger', 'exampleChoiceModal');
    triggerDefaultModal.textContent = 'Launch Default Modal';

    triggerWaitModal = document.createElement('button');
    triggerWaitModal.setAttribute('data-sprk-modal-trigger', 'exampleWaitModal');
    triggerWaitModal.textContent = 'Launch Wait Modal';

    defaultModal.append(cancelDefault);

    containerDiv.appendChild(triggerWaitModal);
    containerDiv.appendChild(triggerDefaultModal);
    containerDiv.appendChild(defaultModal);
    containerDiv.appendChild(waitModal);
    containerDiv.appendChild(modalMask);

    document.body.appendChild(containerDiv);
  });

  it('should show the default modal, mask and set aria-hidden=true on body', () => {
    showModal(defaultModal);

    // showModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(false);

    // showModal should remove the hide class from the modal
    expect(defaultModal.classList.contains(HIDE_CLASS)).eql(false);

    // // showModal should add the aria-hidden attribute to body
    expect(document.body.hasAttribute('aria-hidden')).eql(true);
  });

  it('should show the wait modal, mask and set aria-hidden=true on body', () => {
    showModal(waitModal);

    // showModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(false);

    // showModal should remove the hide class from the modal
    expect(waitModal.classList.contains(HIDE_CLASS)).eql(false);

    // // showModal should add the aria-hidden attribute to body
    expect(document.body.hasAttribute('aria-hidden')).eql(true);
  });

  it('should hide the default modal, mask, remove aria-hidden=true on body, and send focus back to trigger element', () => {
    // First we show the modal
    showModal(defaultModal);
    hideModal(defaultModal, triggerDefaultModal);

    // showModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(true);

    // showModal should remove the hide class from the modal
    expect(defaultModal.classList.contains(HIDE_CLASS)).eql(true);

    // // showModal should add the aria-hidden attribute to body
    expect(document.body.hasAttribute('aria-hidden')).eql(false);
  });

  it('should hide the wait modal, mask, remove aria-hidden=true on body, and send focus back to trigger element', () => {
    // First we show the modal
    showModal(waitModal);
    hideModal(waitModal, triggerWaitModal);

    // showModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(true);

    // showModal should remove the hide class from the modal
    expect(waitModal.classList.contains(HIDE_CLASS)).eql(true);

    // // showModal should add the aria-hidden attribute to body
    expect(document.body.hasAttribute('aria-hidden')).eql(false);
  });

  it('should get all focusable elements in a modal', () => {
    // Add a bunch of focusable elements to modal
    // in addition to the <a> thats already added
    const input = document.createElement('input');
    const select = document.createElement('select');
    const textarea = document.createElement('textarea');
    const button = document.createElement('button');
    // Add non-focusable elements by default to modal
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    const iframe = document.createElement('iframe');

    defaultModal.append(input);
    defaultModal.append(select);
    defaultModal.append(textarea);
    defaultModal.append(button);
    defaultModal.append(iframe);
    defaultModal.append(p);
    defaultModal.append(h1);
    // Should be 5 focusable elements
    expect(getFocusableEls(defaultModal).length).eql(5);
  });

  it('should focus the first focusable element in the modal', () => {
    focusFirstModalEl(defaultModal);
    // Anchor link in default modal should be focused
    const isFocused = document.activeElement === cancelDefault;
    expect(isFocused).eql(true);
  });
});