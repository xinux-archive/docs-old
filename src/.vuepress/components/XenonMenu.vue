<template>
	<div class="xenon-option">
		<label
			><a href="https://github.com/uzinfocom-org/xenon"
				>Xenon {{ xenon }}</a
			></label
		>
		|
		<label
			><a href="https://github.com/uzinfocom-org/docs"
				>Xinux {{ xinux }}</a
			></label
		>
	</div>
</template>

<script>
import { dependencies, version } from "../../../package.json";
export default {
	data() {
		return {
			xenon: dependencies["vuepress-theme-xenon"].replace("^", ""),
			xinux: version,
		};
	},
};
</script>

<style>
.xenon-option {
	align-content: center;
	text-align: center;
}
</style>
