const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function(email){
	let element = await this.driver.$('#identification');
	return await element.setValue(email);
});
	
When('I enter password {kraken-string}', async function (password) {
	let element = await this.driver.$('#password');
	return await element.setValue(password);
});

When('I click Sign in', async function() {
	let element = await this.driver.$('#ember5');
	return await element.click();
});	

When('I click add post', async function() {
	let element = await this.driver.$('#ember20');
	return await element.click();
});

When('I enter post title {string}', async function (title) {
	let element = await this.driver.$('textarea[data-test-editor-title-input=""]');
	return await element.setValue(title);
});

When('I enter post {string}', async function (post) {
	let element = await this.driver.$('p data-koenig-dnd-droppable="true"');
	return await element.setValue(post);
});	

When('I click settings', async function() {
	let element = await this.driver.$('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]');
	return await element.click();
});

When('I click preview', async function() {
	let element = await this.driver.$('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]');
	return await element.click();
});

When('I click publish', async function() {
	let element = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]');
	return await element.click();
});

When('I click continue', async function() {
	let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-large"]');
	return await element.click();
});

When('I click publish right now', async function() {
	let element = await this.driver.$('button[class="gh-btn gh-btn-large gh-btn-pulse ember-view"]');
	return await element.click();
});	

When('I click return editor', async function() {
	let element = await this.driver.$('button[class="gh-back-to-editor"]');
	return await element.click();
});

When('I click unpublish', async function() {
	let element = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-unpublish-trigger"]');
	return await element.click();
});

When('I click revert', async function() {
	let element = await this.driver.$('button[class="gh-revert-to-draft"]');
	return await element.click();
});	

When('I click delete', async function() {
	let element = await this.driver.$('button[class="gh-btn gh-btn-outline gh-btn-icon gh-btn-fullwidth"]');
	return await element.click();
});

When('I click confirm delete', async function() {
	let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
	return await element.click();
});

When('I click return main', async function() {
	let element = await this.driver.$('a[href="#/posts/"]');
	return await element.click();
});

When('I click settings main', async function() {
	let element = await this.driver.$('#ember20');
	return await element.click();
});

When('I enter text Search settings {string}', async function (letter) {
	let element = await this.driver.$('#ember11');
	return await element.setValue(letter);
});

When('I click element', async function() {
	let element = await this.driver.$('button[class="fairydict-bounce1"]');
	return await element.click();
});

When('I click edit', async function() {
	let element = await this.driver.$('a[class="ember-view permalink gh-list-data gh-post-list-button"]');
	return await element.click();
});

When('I click pages', async function() {
	let element = await this.driver.$('a[href="#/pages/"]');
	return await element.click();
});

When('I click new pages', async function() {
	let element = await this.driver.$('a[href="#/editor/page/"]');
	return await element.click();
});

When('I enter page title {string}', async function (title) {
	let element = await this.driver.$('textarea[data-test-editor-title-input=""]');
	return await element.setValue(title);
});

When('I click return main pages', async function() {
	let element = await this.driver.$('a[href="#/pages/"]');
	return await element.click();
});

When('I click edit pages', async function() {
	let element = await this.driver.$('a[class="ember-view permalink gh-list-data gh-post-list-button"]');
	return await element.click();
});

When('I click tags', async function() {
	let element = await this.driver.$('a[href="#/tags/"]');
	return await element.click();
});

When('I click new tags', async function() {
	let element = await this.driver.$('a[href="#/tags/new/"]');
	return await element.click();
});

When('I enter tag name {string}', async function (name) {
	let element = await this.driver.$('#tag-name');
	return await element.setValue(name);
});

When('I enter tag descripcion {string}', async function (descripcion) {
	let element = await this.driver.$('#tag-description');
	return await element.setValue(descripcion);
});

When('I click save', async function() {
	let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
	return await element.click();
});

When('I click user', async function() {
	let element = await this.driver.$('div[data-ebd-id="ember2163-trigger"]');
	return await element.click();
});

When('I click sign out', async function() {
	let element = await this.driver.$('a[href="#/signout/"]');
	return await element.click();
});

When ('I reset', async function(){
	await this.driver.pause(1000);
	return await this.driver.refresh();
});	