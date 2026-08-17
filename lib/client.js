window.__ModuleLoader__.load({
	id: "dsh-live2d-roselia",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region src/client/waifu/config.js
		function readStoredId(key) {
			const value = parseInt(localStorage.getItem(key), 10);
			return Number.isNaN(value) || value < 0 ? null : value;
		}
		let modelId = readStoredId("roselia-modelId");
		let modelTexturesId = readStoredId("roselia-modelTexturesId");
		let config = {};
		let messageArray = [];
		function getModelId() {
			if (modelId === null || modelId === void 0) resetModelState();
			return modelId;
		}
		function setModelId(newModelId) {
			modelId = newModelId;
			localStorage.setItem("roselia-modelId", newModelId.toString());
		}
		function getModelTexturesId() {
			if (modelTexturesId === null || modelTexturesId === void 0) resetModelState();
			return modelTexturesId;
		}
		function setModelTexturesId(newModelTexturesId) {
			modelTexturesId = newModelTexturesId;
			localStorage.setItem("roselia-modelTexturesId", newModelTexturesId.toString());
		}
		function resetModelState() {
			modelId = 0;
			modelTexturesId = 0;
			localStorage.setItem("roselia-modelId", "0");
			localStorage.setItem("roselia-modelTexturesId", "0");
		}
		function getConfig() {
			return config;
		}
		function setConfig(newConfig) {
			config = newConfig;
		}
		function getMessageArray() {
			return messageArray;
		}
		function updateMessageArray(result) {
			messageArray = result.message.default[getModelId()];
			result.seasons.forEach(({ date, text }) => {
				const now = /* @__PURE__ */ new Date(), nowMonth = now.getMonth() + 1, nowDate = now.getDate(), after = date.split("-")[0], afterMonth = parseInt(after.split("/")[0]), afterDate = parseInt(after.split("/")[1]), before = date.split("-")[1] || after, beforeMonth = parseInt(before.split("/")[0]), beforeDate = parseInt(before.split("/")[1]);
				const isCrossYear = afterMonth > beforeMonth;
				let isInRange = false;
				if (isCrossYear) isInRange = nowMonth > afterMonth || nowMonth === afterMonth && nowDate >= afterDate || nowMonth < beforeMonth || nowMonth === beforeMonth && nowDate <= beforeDate;
				else isInRange = (nowMonth > afterMonth || nowMonth === afterMonth && nowDate >= afterDate) && (nowMonth < beforeMonth || nowMonth === beforeMonth && nowDate <= beforeDate);
				if (isInRange) for (let t of text[getModelId()]) messageArray.push(t);
			});
			result.time.forEach(({ hour, text }) => {
				const now = /* @__PURE__ */ new Date(), after = hour.split("-")[0], before = hour.split("-")[1] || after;
				if (after <= now.getHours() && now.getHours() <= before) for (let t of text[getModelId()]) messageArray.push(t);
			});
		}
		//#endregion
		//#region src/client/waifu/utils.js
		function randomSelection(obj) {
			if (Array.isArray(obj)) return obj[Math.floor(Math.random() * obj.length)];
			else if (typeof obj === "number") return Math.floor(Math.random() * obj);
			else return obj;
		}
		//#endregion
		//#region src/client/waifu/message.js
		let messageTimer;
		function showMessage(model, text, timeout, priority) {
			if (!text) return;
			const storedPriority = parseInt(sessionStorage.getItem("roselia-waifu-text"), 10);
			if (!Number.isNaN(storedPriority) && storedPriority > priority) return;
			if (messageTimer) {
				clearTimeout(messageTimer);
				messageTimer = null;
			}
			text = randomSelection(text);
			sessionStorage.setItem("roselia-waifu-text", priority);
			const tips = document.getElementById("waifu-tips-roselia");
			if (tips) {
				tips.innerHTML = text.text || "";
				tips.classList.add("waifu-tips-active");
			}
			messageTimer = setTimeout(() => {
				sessionStorage.removeItem("roselia-waifu-text");
				if (tips) tips.classList.remove("waifu-tips-active");
			}, timeout);
			if (model && model.model) {
				if (text.motion) try {
					model.model.motion(text.motion);
				} catch (error) {}
				if (text.expression) try {
					model.model.expression(text.expression);
				} catch (error) {}
			}
		}
		/** 清理未完成的气泡定时器（插件卸载 / HMR 重建时调用，防止残留 setTimeout）。 */
		function clearMessageTimer() {
			if (messageTimer) {
				clearTimeout(messageTimer);
				messageTimer = null;
			}
		}
		//#endregion
		//#region src/client/waifu/modelList.js
		const modelList = [
			[
				"047_casual-2023",
				"047_2018_dog",
				"047_2019_furisode",
				"047_2021af",
				"047_2024_furisode",
				"047_3rd_general_election_r",
				"047_birthday_2021",
				"047_birthday_2022",
				"047_casual",
				"047_casual_summer",
				"047_casual_summer-2023",
				"047_casual_winter",
				"047_casual_winter-2023",
				"047_collabo_d_2_ur",
				"047_dream_festival",
				"047_dream_festival_2",
				"047_dream_festival_3_ur",
				"047_dream_festival_4_ur",
				"047_event_105_story_01",
				"047_event_105_story_02",
				"047_event_119_story_01",
				"047_event_137_story_01",
				"047_event_216_story_01",
				"047_event_216_story_02",
				"047_event_42_story_01",
				"047_event_52_story_01",
				"047_event_59_story_01",
				"047_event_78_story_01",
				"047_event_89_story_01",
				"047_fantasy",
				"047_garupa_t",
				"047_girlparty2019",
				"047_halloween",
				"047_kirameki_festival",
				"047_kirameki_festival_coat",
				"047_live_default",
				"047_live_event_02_ssr",
				"047_live_event_105_ssr",
				"047_live_event_108_sr",
				"047_live_event_10_sr",
				"047_live_event_113_ssr",
				"047_live_event_116_sr",
				"047_live_event_127_ssr",
				"047_live_event_137_ssr",
				"047_live_event_139_r",
				"047_live_event_149_sr",
				"047_live_event_156_ssr",
				"047_live_event_170_ssr",
				"047_live_event_184_sr",
				"047_live_event_191_ssr",
				"047_live_event_193",
				"047_live_event_202_r",
				"047_live_event_204_sr",
				"047_live_event_20_r",
				"047_live_event_214_ssr",
				"047_live_event_216_ssr",
				"047_live_event_217_sr",
				"047_live_event_21_ssr",
				"047_live_event_221_ur",
				"047_live_event_230_r",
				"047_live_event_243_ssr",
				"047_live_event_252_ssr",
				"047_live_event_25_sr",
				"047_live_event_262_ssr",
				"047_live_event_264_ur",
				"047_live_event_273_ur",
				"047_live_event_284_sr",
				"047_live_event_291_r",
				"047_live_event_301_ur",
				"047_live_event_311_r",
				"047_live_event_314_ur",
				"047_live_event_322_ssr",
				"047_live_event_32_sr",
				"047_live_event_333_ur",
				"047_live_event_36_ssr",
				"047_live_event_43_ssr",
				"047_live_event_52_ssr",
				"047_live_event_59_r",
				"047_live_event_60_ssr",
				"047_live_event_70_ssr",
				"047_live_event_81_sr",
				"047_live_event_84_ssr",
				"047_live_event_89_r",
				"047_live_event_95_sr",
				"047_live_event_97_ssr",
				"047_live_r_2018",
				"047_live_r_2019",
				"047_live_r_2020",
				"047_live_r_2021",
				"047_live_r_2022",
				"047_live_r_2023",
				"047_live_sr_01",
				"047_miku_migikata",
				"047_precious_summer",
				"047_school_summer",
				"047_school_summer_s2",
				"047_school_winter",
				"047_school_winter_s2",
				"047_special_5th",
				"047_swimsuit-2023"
			],
			[
				"036_casual-2023",
				"036_2018_dog",
				"036_3rd_general_election_r",
				"036_4th_general_election_r",
				"036_birthday_2021",
				"036_birthday_2022",
				"036_casual",
				"036_casual_summer",
				"036_casual_summer-2023",
				"036_casual_winter",
				"036_casual_winter-2023",
				"036_dream_festival",
				"036_dream_festival_2",
				"036_dream_festival_3_ur",
				"036_dream_festival_4_ur",
				"036_live_default",
				"036_live_event_02_r",
				"036_live_event_101_r",
				"036_live_event_105_ssr",
				"036_live_event_10_r",
				"036_live_event_116_r",
				"036_live_event_11_ssr",
				"036_live_event_123_ssr",
				"036_live_event_127_r",
				"036_live_event_134_ssr",
				"036_live_event_139_sr",
				"036_live_event_149_r",
				"036_live_event_155_sr",
				"036_live_event_156_ssr",
				"036_live_event_170_sr",
				"036_live_event_174_sr",
				"036_live_event_177_ssr",
				"036_live_event_184_r",
				"036_live_event_185_ssr",
				"036_live_event_193_ssr",
				"036_live_event_204_ssr",
				"036_live_event_214",
				"036_live_event_215_ssr",
				"036_live_event_21_sr",
				"036_live_event_221_ssr",
				"036_live_event_226_r",
				"036_live_event_227_ur",
				"036_live_event_230_sr",
				"036_live_event_23_sr",
				"036_live_event_243_ur",
				"036_live_event_252_sr",
				"036_live_event_253_ur",
				"036_live_event_264_r",
				"036_live_event_266_ur",
				"036_live_event_273_ssr",
				"036_live_event_284_ur",
				"036_live_event_291_ssr",
				"036_live_event_301_ur",
				"036_live_event_311_ur",
				"036_live_event_314_r",
				"036_live_event_31_sr",
				"036_live_event_322_sr",
				"036_live_event_333_ur",
				"036_live_event_38_ssr",
				"036_live_event_43_sr",
				"036_live_event_44_sr",
				"036_live_event_51_r",
				"036_live_event_52_ssr",
				"036_live_event_60_sr",
				"036_live_event_64_ssr",
				"036_live_event_70_sr",
				"036_live_event_73_ssr",
				"036_live_event_76_sr",
				"036_live_event_81_ssr",
				"036_live_event_89_sr",
				"036_live_event_91_ssr",
				"036_live_event_95_r",
				"036_live_event_97_sr",
				"036_live_r_2018",
				"036_live_r_2019",
				"036_live_r_2020",
				"036_live_r_2022",
				"036_live_r_2023",
				"036_live_sr_01",
				"036_miku_migikata",
				"036_precious_summer",
				"036_school_summer",
				"036_school_winter",
				"036_swimsuit-2023"
			],
			[
				"016_casual-2023",
				"016_2018_dog",
				"016_2nd_general_election_r",
				"016_3rd_general_election_r",
				"016_birthday_2021",
				"016_birthday_2022",
				"016_casual",
				"016_casual_summer",
				"016_casual_summer-2023",
				"016_casual_winter",
				"016_casual_winter-2023",
				"016_collabo_i_2_ur",
				"016_dream_festival",
				"016_dream_festival_2",
				"016_dream_festival_3_ur",
				"016_dream_festival_4_ur",
				"016_live_default",
				"016_live_event_02_r",
				"016_live_event_103_ssr",
				"016_live_event_105_sr",
				"016_live_event_109_ssr",
				"016_live_event_10_sr",
				"016_live_event_114_sr",
				"016_live_event_116_ssr",
				"016_live_event_11_r",
				"016_live_event_124_r",
				"016_live_event_127_sr",
				"016_live_event_134_sr",
				"016_live_event_139_ssr",
				"016_live_event_149_ssr",
				"016_live_event_14_ssr",
				"016_live_event_156_sr",
				"016_live_event_163_ssr",
				"016_live_event_166_sr",
				"016_live_event_170_sr",
				"016_live_event_17_r",
				"016_live_event_184_ssr",
				"016_live_event_191_sr",
				"016_live_event_193",
				"016_live_event_202_ssr",
				"016_live_event_204",
				"016_live_event_214_sr",
				"016_live_event_215_ssr",
				"016_live_event_21_r",
				"016_live_event_221_ssr",
				"016_live_event_230_ur",
				"016_live_event_243_sr",
				"016_live_event_245_ur",
				"016_live_event_252_ur",
				"016_live_event_25_ssr",
				"016_live_event_264_ur",
				"016_live_event_273_r",
				"016_live_event_284_ur",
				"016_live_event_291_sr",
				"016_live_event_301_sr",
				"016_live_event_311_ssr",
				"016_live_event_314_sr",
				"016_live_event_315_ur",
				"016_live_event_31_sr",
				"016_live_event_322_ur",
				"016_live_event_32_ssr",
				"016_live_event_333_ssr",
				"016_live_event_43_ssr",
				"016_live_event_45_sr",
				"016_live_event_52_sr",
				"016_live_event_58_ssr",
				"016_live_event_60_sr",
				"016_live_event_64_r",
				"016_live_event_70_r",
				"016_live_event_74_sr",
				"016_live_event_81_ssr",
				"016_live_event_89_sr",
				"016_live_event_93_ssr",
				"016_live_event_97_sr",
				"016_live_r_2018",
				"016_live_r_2019",
				"016_live_r_2020",
				"016_live_r_2022",
				"016_live_r_2023",
				"016_live_sr_01",
				"016_miku_migikata",
				"016_precious_summer",
				"016_school_summer",
				"016_school_winter_s2",
				"016_swimsuit-2023"
			],
			[
				"001_casual-2023",
				"001_2018_dog",
				"001_3rd_general_election_r",
				"001_birthday_2021",
				"001_birthday_2022",
				"001_casual",
				"001_casual_summer",
				"001_casual_summer-2023",
				"001_casual_winter",
				"001_casual_winter-2023",
				"001_dream_festival",
				"001_dream_festival_2",
				"001_dream_festival_3_ur",
				"001_dream_festival_4_ur",
				"001_halloween",
				"001_kirameki_festival",
				"001_live_default",
				"001_live_event_02_sr",
				"001_live_event_09_r",
				"001_live_event_101_ssr",
				"001_live_event_105_sr",
				"001_live_event_10_r",
				"001_live_event_116_sr",
				"001_live_event_127_sr",
				"001_live_event_128_r",
				"001_live_event_12_ssr",
				"001_live_event_139_ssr",
				"001_live_event_145_sr",
				"001_live_event_149_sr",
				"001_live_event_14_r",
				"001_live_event_150_ssr",
				"001_live_event_156_sr",
				"001_live_event_162_r",
				"001_live_event_170_ssr",
				"001_live_event_171_r",
				"001_live_event_184_ssr",
				"001_live_event_191_r",
				"001_live_event_193_ssr",
				"001_live_event_204",
				"001_live_event_209_r",
				"001_live_event_214_ssr",
				"001_live_event_21_sr",
				"001_live_event_221_r",
				"001_live_event_230_ssr",
				"001_live_event_236_ur",
				"001_live_event_243_ur",
				"001_live_event_252_r",
				"001_live_event_264_sr",
				"001_live_event_273_ur",
				"001_live_event_284_ssr",
				"001_live_event_291_ur",
				"001_live_event_301_r",
				"001_live_event_302_sr",
				"001_live_event_312_ssr",
				"001_live_event_314_ssr",
				"001_live_event_317_sr",
				"001_live_event_31_ssr",
				"001_live_event_322_ur",
				"001_live_event_325_ssr",
				"001_live_event_333_sr",
				"001_live_event_335_r",
				"001_live_event_33_r",
				"001_live_event_43_sr",
				"001_live_event_51_ssr",
				"001_live_event_52_sr",
				"001_live_event_60_ssr",
				"001_live_event_65_r",
				"001_live_event_69_r",
				"001_live_event_70_sr",
				"001_live_event_71_sr",
				"001_live_event_78_ssr",
				"001_live_event_81_sr",
				"001_live_event_89_ssr",
				"001_live_event_97_sr",
				"001_live_r_2018",
				"001_live_r_2019",
				"001_live_r_2020",
				"001_live_r_2022",
				"001_live_r_2023",
				"001_live_sr_01",
				"001_miku_migikata",
				"001_precious_summer",
				"001_school_summer",
				"001_school_summer-2023",
				"001_school_winter-2023",
				"001_school_winter_s2",
				"001_swimsuit-2023"
			],
			[
				"032_casual-2023",
				"032_2018_dog",
				"032_3rd_general_election_r",
				"032_birthday_2021",
				"032_birthday_2022",
				"032_casual",
				"032_casual_summer",
				"032_casual_summer-2023",
				"032_casual_winter",
				"032_casual_winter-2023",
				"032_dream_festival",
				"032_dream_festival_2",
				"032_dream_festival_3_ur",
				"032_dream_festival_5_ur",
				"032_live_default",
				"032_live_event_02_ssr",
				"032_live_event_105_sr",
				"032_live_event_106_r",
				"032_live_event_10_ssr",
				"032_live_event_116_ssr",
				"032_live_event_127_ssr",
				"032_live_event_134_sr",
				"032_live_event_139_sr",
				"032_live_event_149_ssr",
				"032_live_event_14_sr",
				"032_live_event_156_sr",
				"032_live_event_170_r",
				"032_live_event_171_ssr",
				"032_live_event_180_ssr",
				"032_live_event_184_sr",
				"032_live_event_185_r",
				"032_live_event_190_ssr",
				"032_live_event_193_sr",
				"032_live_event_204_ssr",
				"032_live_event_213_sr",
				"032_live_event_214",
				"032_live_event_216_ssr",
				"032_live_event_21_r",
				"032_live_event_221_ur",
				"032_live_event_224_r",
				"032_live_event_230_ur",
				"032_live_event_23_r",
				"032_live_event_243_r",
				"032_live_event_248_sr",
				"032_live_event_252_ur",
				"032_live_event_264_ssr",
				"032_live_event_273_sr",
				"032_live_event_281_ur",
				"032_live_event_284_r",
				"032_live_event_291_ur",
				"032_live_event_29_sr",
				"032_live_event_301_ssr",
				"032_live_event_304_ur",
				"032_live_event_314_ur",
				"032_live_event_31_ssr",
				"032_live_event_322_r",
				"032_live_event_333_r",
				"032_live_event_38_ssr",
				"032_live_event_43_sr",
				"032_live_event_52_r",
				"032_live_event_59_ssr",
				"032_live_event_60_r",
				"032_live_event_68_sr",
				"032_live_event_70_ssr",
				"032_live_event_76_ssr",
				"032_live_event_78_sr",
				"032_live_event_81_r",
				"032_live_event_89_ssr",
				"032_live_event_97_ssr",
				"032_live_r_2018",
				"032_live_r_2019",
				"032_live_r_2020",
				"032_live_r_2022",
				"032_live_r_2023",
				"032_live_sr_01",
				"032_miku_migikata",
				"032_precious_summer",
				"032_school_summer",
				"032_school_winter",
				"032_swimsuit-2023"
			]
		].map((char) => char);
		//#endregion
		//#region src/client/waifu/tips.js
		/**
		* Roselia 台词包（按 5 角色人设撰写；motion 名取自 Roselia 模型实际动作集，
		* 使用全五角色通用动作：smile01-03 / kime01 / serious01 / sad01 / shame01 /
		* surprised01 / angry01 / bye01 / nf01 / idle01；ako 特有 chuni01、yukina 特有 nekodere01）。
		* 角色顺序：yukina(0) / sayo(1) / lisa(2) / ako(3) / rinko(4)。
		*/
		const tips = {
			"message": {
				"default": [
					[
						{
							"text": "不要让梦想沉没在黑暗里，只要拼命伸出手就好。",
							"motion": "kime01"
						},
						{
							"text": "大家的声音，是我一直站上舞台的力量。",
							"motion": "smile01"
						},
						{
							"text": "Roselia 的 Live，会是最极致、最闪耀的。",
							"motion": "kime01"
						},
						{
							"text": "拼命唱着的瞬间，才能证明自己是真实的。",
							"motion": "kime01"
						},
						{
							"text": "就算只有一点进步，也绝不能停下脚步。",
							"motion": "serious01"
						},
						{
							"text": "我的目标，只有顶点。",
							"motion": "kime01"
						},
						{
							"text": "把这份音乐，献给对梦想保持着纯粹的人。",
							"motion": "smile02"
						},
						{
							"text": "一直以来，谢谢你聆听我们的歌。",
							"motion": "smile03"
						},
						{
							"text": "舞台上没有偶然，只有必然。",
							"motion": "serious01"
						},
						{
							"text": "想要站上更高的地方，就要承受更多的责任。",
							"motion": "serious01"
						},
						{
							"text": "在你身边歌唱，也能让我变得坚强。",
							"motion": "smile02"
						},
						{
							"text": "今晚，就让我为最珍视的你，唱一首歌吧。",
							"motion": "smile01"
						}
					],
					[
						{
							"text": "完美，需要日复一日毫不动摇的练习。",
							"motion": "serious01"
						},
						{
							"text": "节奏不能有丝毫偏差，这是对音乐的敬意。",
							"motion": "kime01"
						},
						{
							"text": "比你更强，也比你更努力——这是我的信条。",
							"motion": "serious01"
						},
						{
							"text": "今天也好好调整了指法，可以放心了。",
							"motion": "smile01"
						},
						{
							"text": "妹妹她又……不，没什么。",
							"motion": "sad01"
						},
						{
							"text": "和你们一起演奏，让我看到了新的风景。",
							"motion": "smile02"
						},
						{
							"text": "我会用这把吉他的音色，支撑起 Roselia。",
							"motion": "kime01"
						},
						{
							"text": "只凭天赋是走不远的，努力才能抵达。",
							"motion": "serious01"
						},
						{
							"text": "稍微……放松一下也没关系吧。",
							"motion": "smile03"
						},
						{
							"text": "今晚的练习，状态很好。",
							"motion": "smile01"
						},
						{
							"text": "感谢你的支持，我记在心里。",
							"motion": "smile02"
						},
						{
							"text": "下一次 Live，请再看一次我们的全力。",
							"motion": "kime01"
						}
					],
					[
						{
							"text": "啊哈哈，今天也一起加油吧！",
							"motion": "smile01"
						},
						{
							"text": "让每个人都能闪闪发光呢～",
							"motion": "smile02"
						},
						{
							"text": "友希那她……又在逞强了吧，真是的。",
							"motion": "smile03"
						},
						{
							"text": "累了的话，就来抱抱我吧！",
							"motion": "smile01"
						},
						{
							"text": "我啊，最最喜欢和大家在一起的时间了。",
							"motion": "smile02"
						},
						{
							"text": "要好好吃饭、好好睡觉哦？",
							"motion": "smile01"
						},
						{
							"text": "这首新歌，我超想快点弹给大家听！",
							"motion": "kime01"
						},
						{
							"text": "贝斯的声音，就是要稳稳地撑着大家。",
							"motion": "serious01"
						},
						{
							"text": "呀——！吓了一跳，不过好开心！",
							"motion": "surprised01"
						},
						{
							"text": "有想倾诉的事，随时都可以找我哦。",
							"motion": "smile02"
						},
						{
							"text": "今天的我都闻到晚饭的香味了～",
							"motion": "smile03"
						},
						{
							"text": "和 Roselia 的大家在一起，最幸福了！",
							"motion": "smile02"
						}
					],
					[
						{
							"text": "哼哼，被本小姐的节奏给震到了吧！",
							"motion": "kime01"
						},
						{
							"text": "黑暗的鼓点，正是我灵魂的咆哮！",
							"motion": "chuni01"
						},
						{
							"text": "今天的我，可是觉醒了新的力量！",
							"motion": "smile01"
						},
						{
							"text": "喵～终于到演出时间啦！",
							"motion": "smile01"
						},
						{
							"text": "鼓棒挥动的瞬间，世界都在震颤！",
							"motion": "kime01"
						},
						{
							"text": "啊！台词想不出来……让我先冷静一下。",
							"motion": "sad01"
						},
						{
							"text": "总有一天，我要成为震撼世界的鼓手！",
							"motion": "kime01"
						},
						{
							"text": "月夜的鼓声，连星星都会驻足倾听喔。",
							"motion": "serious01"
						},
						{
							"text": "喵喵出演中！今天也要元气满满！",
							"motion": "smile02"
						},
						{
							"text": "总有一天我要用鼓声撼动最大的舞台！",
							"motion": "kime01"
						},
						{
							"text": "嘿嘿，谢谢你来看我们哦！",
							"motion": "smile02"
						},
						{
							"text": "本小姐的羁绊，可是比黑暗还要深厚啊！",
							"motion": "smile01"
						}
					],
					[
						{
							"text": "那个……我会好好弹的……请多指教……",
							"motion": "shame01"
						},
						{
							"text": "在大家面前演奏……还是会紧张呢……",
							"motion": "sad01"
						},
						{
							"text": "琴键……是我安心的伙伴。",
							"motion": "smile01"
						},
						{
							"text": "好不容易……才迈出这一步，我不会退缩的。",
							"motion": "serious01"
						},
						{
							"text": "听到大家的应援……就觉得很有力量……",
							"motion": "smile02"
						},
						{
							"text": "呜……接下来……该说什么才好……",
							"motion": "shame01"
						},
						{
							"text": "如果能帮上 Roselia 的忙……那我就很开心了。",
							"motion": "smile01"
						},
						{
							"text": "今天……也努力练习了呢……",
							"motion": "smile03"
						},
						{
							"text": "呜哇……有人看着……好害羞……",
							"motion": "shame01"
						},
						{
							"text": "谢谢你……愿意一直陪着我们……",
							"motion": "smile02"
						},
						{
							"text": "我会……一点点……变得更强壮的……",
							"motion": "kime01"
						},
						{
							"text": "能得到你的鼓励……我很高兴……",
							"motion": "smile01"
						}
					]
				],
				"console": [
					{
						"text": "啊……在这里也能听见你的心声。",
						"motion": "smile01"
					},
					{
						"text": "嗯……你在看着我吗？",
						"motion": "smile01"
					},
					{
						"text": "呜……被发现了吗……不过没关系……",
						"motion": "shame01"
					},
					{
						"text": "呀！被你发现啦～要一起休息下吗？",
						"motion": "smile02"
					},
					{
						"text": "哼，看见本小姐的英姿了吗！",
						"motion": "kime01"
					}
				],
				"copy": [
					{
						"text": "复制了什么？要藏好别让人夺走了。",
						"motion": "serious01"
					},
					{
						"text": "复制……嗯，是重要的东西吗。",
						"motion": "smile01"
					},
					{
						"text": "呜……复制的时候不小心按错就糟了……",
						"motion": "shame01"
					},
					{
						"text": "复制好啦～记得检查一遍哦。",
						"motion": "smile01"
					},
					{
						"text": "复制就加密起来了，黑暗封印完成！",
						"motion": "chuni01"
					}
				],
				"visibilitychange": [
					{
						"text": "欢迎回来。一直在等你。",
						"motion": "smile01"
					},
					{
						"text": "你回来了。接下来准备去练习了。",
						"motion": "smile01"
					},
					{
						"text": "呜……欢迎回来……",
						"motion": "smile02"
					},
					{
						"text": "回来啦！要喝点什么吗？",
						"motion": "smile02"
					},
					{
						"text": "你终于现身了！本小姐恭候多时！",
						"motion": "kime01"
					}
				]
			},
			"mouseover": [
				{
					"selector": "#waifu-tool-roselia-switch-model",
					"text": [
						{
							"text": "想听其他伙伴的歌吗？",
							"motion": "smile02"
						},
						{
							"text": "……想换人？随你。",
							"motion": "smile01"
						},
						{
							"text": "呜……要换别的孩子吗……",
							"motion": "sad01"
						},
						{
							"text": "换人？哼哼，本小姐也可以！",
							"motion": "kime01"
						},
						{
							"text": "要换……谁呢……",
							"motion": "shame01"
						}
					]
				},
				{
					"selector": "#waifu-tool-roselia-photo",
					"text": [
						{
							"text": "拍照？把这一刻的闪耀留下来。",
							"motion": "kime01"
						},
						{
							"text": "拍照……记得选好角度。",
							"motion": "smile01"
						},
						{
							"text": "呜……要拍照……好紧张……",
							"motion": "shame01"
						},
						{
							"text": "拍照！来个帅气的姿势！",
							"motion": "kime01"
						},
						{
							"text": "拍……拍照吗……好吗……",
							"motion": "smile01"
						}
					]
				},
				{
					"selector": "#waifu-tool-roselia-info",
					"text": [
						{
							"text": "想了解 Roselia 吗？我们的故事很精彩。",
							"motion": "smile01"
						},
						{
							"text": "关于我……不，先听我说完。",
							"motion": "serious01"
						},
						{
							"text": "我的事……没什么特别的……",
							"motion": "sad01"
						},
						{
							"text": "你要听本小姐的传奇吗？那就听好！",
							"motion": "kime01"
						},
						{
							"text": "我的……小小的心意，愿意听吗……",
							"motion": "smile02"
						}
					]
				},
				{
					"selector": "#waifu-tool-roselia-quit",
					"text": [
						{
							"text": "要走？嗯，下次 Live 记得来。",
							"motion": "smile01"
						},
						{
							"text": "……再见。我会继续练习的。",
							"motion": "smile01"
						},
						{
							"text": "呜……再见……下次见……",
							"motion": "bye01"
						},
						{
							"text": "退场！本小姐华丽退场，改天再来！",
							"motion": "kime01"
						},
						{
							"text": "再见……很高兴见到你……",
							"motion": "smile02"
						}
					]
				}
			],
			"seasons": [
				{
					"date": "01/01",
					"text": [
						{
							"text": "新年快乐。今年也要抵达更高的顶点。",
							"motion": "kime01"
						},
						{
							"text": "新年……定下目标就要坚守到底。",
							"motion": "smile01"
						},
						{
							"text": "新年快乐……请大家多多关照……",
							"motion": "smile01"
						},
						{
							"text": "新年！本小姐今年也要大展身手！",
							"motion": "kime01"
						},
						{
							"text": "新年……也能好好演奏就好了……",
							"motion": "smile01"
						}
					]
				},
				{
					"date": "02/14",
					"text": [
						{
							"text": "情人节。把心意写进歌里献给重要的人。",
							"motion": "smile02"
						},
						{
							"text": "巧克力……嗯，练习前不吃为好。",
							"motion": "smile01"
						},
						{
							"text": "呜……该不该送巧克力呢……",
							"motion": "shame01"
						},
						{
							"text": "情人节！黑暗的甜点仪式！",
							"motion": "chuni01"
						},
						{
							"text": "巧克力……好像很好吃的样子……",
							"motion": "smile01"
						}
					]
				},
				{
					"date": "03/14",
					"text": [
						{
							"text": "白色情人节……回一首歌当回礼吧。",
							"motion": "smile03"
						},
						{
							"text": "回礼……要准备得精准无误。",
							"motion": "serious01"
						},
						{
							"text": "呜……回礼该送什么好……",
							"motion": "sad01"
						},
						{
							"text": "回礼？本小姐的回礼可是无敌的！",
							"motion": "kime01"
						},
						{
							"text": "回礼……希望大家会喜欢……",
							"motion": "smile02"
						}
					]
				},
				{
					"date": "06/01-08/31",
					"text": [
						{
							"text": "夏天。夏日 Live，要唱得比太阳更耀眼。",
							"motion": "kime01"
						},
						{
							"text": "夏天……练习时会热，也要坚持。",
							"motion": "serious01"
						},
						{
							"text": "呜……夏天好热……但演出还是会努力的……",
							"motion": "smile01"
						},
						{
							"text": "夏天！烟火大会和 Live，太棒了！",
							"motion": "kime01"
						},
						{
							"text": "夏天……是海边和祭典的季节呢……",
							"motion": "smile02"
						}
					]
				},
				{
					"date": "09/01-11/30",
					"text": [
						{
							"text": "秋天。适合静静写下新曲的季节。",
							"motion": "smile01"
						},
						{
							"text": "秋天……换季，音色也要重新校准。",
							"motion": "serious01"
						},
						{
							"text": "秋天……凉爽，很舒服……",
							"motion": "smile02"
						},
						{
							"text": "秋天！丰收之夜的旋律！",
							"motion": "kime01"
						},
						{
							"text": "秋天……落叶的声音，像轻柔的伴奏……",
							"motion": "smile01"
						}
					]
				},
				{
					"date": "12/01-02/29",
					"text": [
						{
							"text": "冬天。在寒风里，我们的歌依然温暖。",
							"motion": "smile02"
						},
						{
							"text": "冬天……手会冷，更要热身再练。",
							"motion": "serious01"
						},
						{
							"text": "呜……冬天好冷……想喝热可可……",
							"motion": "smile01"
						},
						{
							"text": "冬天！寒夜里也要燃起摇滚之魂！",
							"motion": "kime01"
						},
						{
							"text": "冬天……要注意保湿保养呢……",
							"motion": "smile01"
						}
					]
				},
				{
					"date": "12/24-12/26",
					"text": [
						{
							"text": "圣诞。把歌声当作礼物送给大家。",
							"motion": "smile03"
						},
						{
							"text": "圣诞……今年也要演出，不能松懈。",
							"motion": "serious01"
						},
						{
							"text": "呜……圣诞……希望有人来听……",
							"motion": "shame01"
						},
						{
							"text": "圣诞！暗夜的圣歌之夜！",
							"motion": "kime01"
						},
						{
							"text": "圣诞……会下雪吗……",
							"motion": "smile01"
						}
					]
				},
				{
					"date": "12/31",
					"text": [
						{
							"text": "今年辛苦了。明年，我会唱得更远。",
							"motion": "kime01"
						},
						{
							"text": "一年结束了。感谢所有倾听的人。",
							"motion": "smile01"
						},
						{
							"text": "今年……也谢谢大家……",
							"motion": "smile01"
						},
						{
							"text": "跨年！本小姐的年度收尾演出！",
							"motion": "kime01"
						},
						{
							"text": "今年……能和大家一起真好……",
							"motion": "smile02"
						}
					]
				}
			],
			"time": [
				{
					"hour": "6-7",
					"text": [
						{
							"text": "早上好。以晨练开始新的一天。",
							"motion": "serious01"
						},
						{
							"text": "早。早起正好练习指法。",
							"motion": "smile01"
						},
						{
							"text": "呜……早……早上好……",
							"motion": "smile01"
						},
						{
							"text": "早！本小姐的清晨也是练习时刻！",
							"motion": "kime01"
						},
						{
							"text": "早上好……又是新的一天呢……",
							"motion": "smile01"
						}
					]
				},
				{
					"hour": "8-11",
					"text": [
						{
							"text": "上午好。要去排练室了。",
							"motion": "smile01"
						},
						{
							"text": "上午……专注练习的黄金时间。",
							"motion": "serious01"
						},
						{
							"text": "上午好……今天也要好好努力……",
							"motion": "smile01"
						},
						{
							"text": "上午！新的演出构思出现了！",
							"motion": "kime01"
						},
						{
							"text": "上午……稍微练习一下键盘吧……",
							"motion": "smile02"
						}
					]
				},
				{
					"hour": "12-13",
					"text": [
						{
							"text": "午休。要好好吃饭，才有体力唱歌。",
							"motion": "smile01"
						},
						{
							"text": "午饭……清淡为佳。",
							"motion": "smile01"
						},
						{
							"text": "呜……午饭……吃得有点多……",
							"motion": "shame01"
						},
						{
							"text": "午休！补充力量的时间！",
							"motion": "kime01"
						},
						{
							"text": "午饭……一个人吃有点寂寞……",
							"motion": "sad01"
						}
					]
				},
				{
					"hour": "14-16",
					"text": [
						{
							"text": "下午。今天状态不错，多练一会儿。",
							"motion": "kime01"
						},
						{
							"text": "下午……合练时间到了。",
							"motion": "serious01"
						},
						{
							"text": "下午……要不要再练半小时呢……",
							"motion": "smile01"
						},
						{
							"text": "下午！本小姐的练习进入状态！",
							"motion": "kime01"
						},
						{
							"text": "下午……偷偷想一下饮料的事……",
							"motion": "smile02"
						}
					]
				},
				{
					"hour": "17-19",
					"text": [
						{
							"text": "傍晚。夕阳里，为夜晚的演出热身。",
							"motion": "smile02"
						},
						{
							"text": "傍晚……该做准备了。",
							"motion": "smile01"
						},
						{
							"text": "傍晚……要到演出紧张的时刻了呢……",
							"motion": "sad01"
						},
						{
							"text": "傍晚！黑暗逐渐降临，正是演出时刻！",
							"motion": "kime01"
						},
						{
							"text": "傍晚……晚霞真美呢……",
							"motion": "smile01"
						}
					]
				},
				{
					"hour": "20-21",
					"text": [
						{
							"text": "晚上好。愿今晚的歌声能被你听见。",
							"motion": "kime01"
						},
						{
							"text": "晚上……是练新曲的好时间。",
							"motion": "serious01"
						},
						{
							"text": "晚上好……希望不会吵到别人……",
							"motion": "shame01"
						},
						{
							"text": "晚上！本轮月的选曲开始了！",
							"motion": "kime01"
						},
						{
							"text": "晚上好……夜深了，可要小心着凉……",
							"motion": "smile01"
						}
					]
				},
				{
					"hour": "22-23",
					"text": [
						{
							"text": "很晚了。不过为梦想熬夜，我不后悔。",
							"motion": "serious01"
						},
						{
							"text": "深夜……手还是热的，再练一段。",
							"motion": "serious01"
						},
						{
							"text": "呜……该睡了……明天再练……",
							"motion": "shame01"
						},
						{
							"text": "深夜！正是本小姐灵感喷发之时！",
							"motion": "kime01"
						},
						{
							"text": "好晚了呢……你也要早点休息哦……",
							"motion": "smile02"
						}
					]
				},
				{
					"hour": "0-5",
					"text": [
						{
							"text": "凌晨了。为追梦而燃烧，这正是 Roselia。",
							"motion": "kime01"
						},
						{
							"text": "这个时间……就该停下来了。",
							"motion": "smile01"
						},
						{
							"text": "呜……好困……但还是想再练一下……",
							"motion": "shame01"
						},
						{
							"text": "凌晨！暗夜的旋律最美的时刻！",
							"motion": "kime01"
						},
						{
							"text": "都这个点了……你还没睡吗？",
							"motion": "serious01"
						}
					]
				}
			]
		};
		//#endregion
		//#region src/client/waifu/model.js
		const PIXI = { get Application() {
			return window.PIXI.Application;
		} };
		const Live2DModel = { get value() {
			return window.PIXI.live2d.Live2DModel;
		} };
		/**
		* 适合作为随机待机动作的 motion 组名。
		* 各角色的可用动作集不同，加载时会被过滤成该角色实际存在的集合。
		* （Roselia 模型动作集：smile01-06 / nf01-05 / nnf01-05 / kime01 /
		*   sad01-02 / surprised01-03 / serious01-02 / shame01 / niyaniya01 /
		*   oowarai01 / wink01 / sing01 / nod01-02 / sleep01-02 / eeto01 / jaan01 等）
		*/
		const IDLE_MOTIONS = [
			"smile01",
			"smile02",
			"smile03",
			"smile04",
			"smile05",
			"smile06",
			"thinking01",
			"thinking02",
			"nf01",
			"nf02",
			"nnf01",
			"nnf02",
			"kandou01",
			"kime01",
			"sad01",
			"surprised01",
			"serious01",
			"shame01",
			"niya01",
			"ando01",
			"odoodo01",
			"sigh01",
			"niyaniya01",
			"oowarai01",
			"wink01",
			"sing01",
			"nod01",
			"nod02",
			"sleep01",
			"eeto01",
			"jaan01",
			"gattsu01"
		];
		var Model = class {
			constructor() {
				this.cdnPath = getConfig().cdnPath;
				this.app = new PIXI.Application({
					view: document.getElementById("live2d-roselia"),
					autoStart: true,
					width: 800,
					height: 800,
					backgroundAlpha: 0
				});
				this.modelList = modelList;
				this.tips = tips;
				this.model = null;
				this.modelIndex = null;
				this.modelMotions = [];
				this.modelExpressions = [];
				this.idleMotions = [];
			}
			async loadModel(modelId, modelTexturesId, message) {
				if (modelId >= this.modelList.length) modelId %= this.modelList.length;
				if (modelTexturesId >= this.modelList[modelId].length) modelTexturesId %= this.modelList[modelId].length;
				setModelId(modelId);
				setModelTexturesId(modelTexturesId);
				console.log(`Live2D Model ${modelId}-${modelTexturesId}`);
				showMessage(this, message, 4e3, 10);
				const target = this.modelList[modelId][modelTexturesId];
				const url = `${this.cdnPath}model/${target}/index.json`;
				try {
					this.modelIndex = await fetch(url).then((response) => {
						if (!response.ok) throw new Error(`HTTP ${response.status}`);
						return response.json();
					});
				} catch (error) {
					console.error(`模型加载失败: ${url}`, error);
					showMessage(this, {
						text: "呜……模型加载失败了，换个衣服试试？",
						motion: "sad01"
					}, 5e3, 10);
					return;
				}
				this.modelIndex.url = url;
				if (!this.modelIndex.motions.idle && this.modelIndex.motions.idle01) this.modelIndex.motions.idle = this.modelIndex.motions.idle01;
				if (Array.isArray(this.modelIndex.expressions) && !this.modelIndex.expressions.find((expression) => expression.name === "idle") && this.modelIndex.expressions.find((expression) => expression.name === "idle01")) this.modelIndex.expressions.push({
					name: "idle",
					file: this.modelIndex.expressions.find((expression) => expression.name === "idle01").file
				});
				this.modelMotions = Object.keys(this.modelIndex.motions || {});
				this.modelExpressions = (this.modelIndex.expressions || []).map((expression) => expression.name);
				this.idleMotions = IDLE_MOTIONS.filter((motion) => this.modelMotions.includes(motion));
				this.app.stage.removeChildren();
				try {
					this.model = await Live2DModel.value.from(this.modelIndex, { motionPreload: getConfig().preload });
				} catch (error) {
					console.error("Live2D 模型渲染初始化失败", error);
					showMessage(this, {
						text: "呜……渲染器罢工了，刷新一下试试？",
						motion: "sad01"
					}, 5e3, 10);
					return;
				}
				this.app.stage.addChild(this.model);
				this.model.scale.set(.33);
				updateMessageArray(this.tips);
			}
			/** 播放一个随机的待机动作（不弹气泡） */
			playRandomIdle() {
				if (!this.model || !this.idleMotions.length) return;
				const motion = this.idleMotions[Math.floor(Math.random() * this.idleMotions.length)];
				try {
					this.model.motion(motion);
				} catch (error) {}
			}
			/** 随机切换一个表情 */
			playRandomExpression() {
				if (!this.model || !this.modelExpressions.length) return;
				const expression = this.modelExpressions[Math.floor(Math.random() * this.modelExpressions.length)];
				try {
					this.model.expression(expression);
				} catch (error) {}
			}
			/** 让模型视线跟随屏幕坐标（canvas 空间，可超出 0~800） */
			focusAt(clientX, clientY) {
				if (!this.model) return;
				const canvas = this.app.view;
				const rect = canvas.getBoundingClientRect();
				if (rect.width === 0 || rect.height === 0) return;
				const x = (clientX - rect.left) * (canvas.width / rect.width);
				const y = (clientY - rect.top) * (canvas.height / rect.height);
				try {
					this.model.focus(x, y);
				} catch (error) {}
			}
			/** 截取当前画面为 PNG dataURL */
			capture() {
				if (!this.model) return null;
				try {
					return this.app.renderer.plugins.extract.canvas(this.app.stage).toDataURL("image/png");
				} catch (error) {
					try {
						return this.app.view.toDataURL("image/png");
					} catch (error2) {
						return null;
					}
				}
			}
		};
		//#endregion
		//#region src/client/waifu/tools.js
		const fa_circle_user = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z\"/></svg>");
		const fa_camera_retro = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM344 304c0 48.6-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88z\"/></svg>");
		const fa_circle_info = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z\"/></svg>");
		const fa_xmark = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z\"/></svg>");
		const tools = {
			"switch-model": {
				icon: fa_circle_user,
				callback: () => {}
			},
			"photo": {
				icon: fa_camera_retro,
				callback: () => {}
			},
			"info": {
				icon: fa_circle_info,
				callback: () => {
					showMessage({
						expression: () => null,
						motion: () => null
					}, {
						text: "Roselia Live2D 桌宠插件 · 5 角色 × 436 套换装",
						motion: "smile01"
					}, 4e3, 10);
				}
			},
			"quit": {
				icon: fa_xmark,
				callback: () => {
					localStorage.setItem("ro-waifu-display", Date.now());
					const waifu = document.getElementById("waifu-roselia");
					if (waifu) waifu.style.bottom = "-500px";
					setTimeout(() => {
						const toggle = document.getElementById("waifu-toggle-roselia");
						if (toggle) toggle.classList.add("waifu-toggle-active");
					}, 3e3);
				}
			}
		};
		//#endregion
		//#region src/client/waifu/characters.js
		/**
		* 角色元数据与模型资源名工具（Roselia 版）。
		*
		* 模型目录为 `<standalone编号>_<资源id>`（如 `047_casual-2023`），编号来自
		* 独立版 BANDORI 看板娘的 STANDALONE_CHARS（yukina=47 / sayo=36 / lisa=16 /
		* ako=1 / rinko=32）。换装面板的显示名由 textureLabel() 把资源段名翻译成
		* 中文（如 `047_live_event_41_sr` → 「活动41 SR」），目录名本身保持不变。
		*/
		const CHARACTERS = [
			{
				"id": "yukina",
				"num": 47,
				"name": "湊 友希那",
				"en": "Yukina",
				"color": "#a96bc7"
			},
			{
				"id": "sayo",
				"num": 36,
				"name": "氷川 紗夜",
				"en": "Sayo",
				"color": "#2e9e9b"
			},
			{
				"id": "lisa",
				"num": 16,
				"name": "今井 リサ",
				"en": "Lisa",
				"color": "#e893c1"
			},
			{
				"id": "ako",
				"num": 1,
				"name": "宇田川 亜子",
				"en": "Ako",
				"color": "#e8685a"
			},
			{
				"id": "rinko",
				"num": 32,
				"name": "白金 燐子",
				"en": "Rinko",
				"color": "#7fa9d9"
			}
		];
		/**
		* 资源段名（去掉 3 位编号前缀后）→ 中文显示名规则，按顺序匹配，命中即止。
		* `$1` 等为捕获组引用；函数形式可做数值化等处理。
		*/
		const LABEL_RULES = [
			[/^casual_summer-2023$/, "夏常服2023"],
			[/^casual_winter-2023$/, "冬常服2023"],
			[/^casual-2023$/, "常服2023"],
			[/^casual_summer$/, "夏常服"],
			[/^casual_winter$/, "冬常服"],
			[/^casual$/, "常服"],
			[/^school_summer-2023$/, "校服夏2023"],
			[/^school_winter-2023$/, "校服冬2023"],
			[/^school_summer$/, "校服夏"],
			[/^school_winter_v3$/, "校服冬V3"],
			[/^school_winter$/, "校服冬"],
			[/^school_winter_s2$/, "校服冬S2"],
			[/^school_summer_s2$/, "校服夏S2"],
			[/^swimsuit-2023$/, "泳装2023"],
			[/^swimsuit$/, "泳装"],
			[/^yukata$/, "浴衣"],
			[/^(\d{4})_furisode$/, "振袖$1"],
			[/^arbeit$/, "打工"],
			[/^pajamas-(\d{4})$/, "睡衣$1"],
			[/^pajamas$/, "睡衣"],
			[/^chapter0_pajamas$/, "序章睡衣"],
			[/^chapter0_live$/, "序章演出"],
			[/^gym_clothes$/, "体操服"],
			[/^cafe$/, "咖啡厅"],
			[/^halloween$/, "万圣节"],
			[/^christmas_01$/, "圣诞"],
			[/^fantasy$/, "奇幻"],
			[/^garupa_t$/, "ガルパT恤"],
			[/^birthday_(\d{4})$/, "生日$1"],
			[/^birthday$/, "生日"],
			[/^dream_festival_(\d+)(_ur)?$/, "梦祭$1"],
			[/^dream_festival$/, "梦祭"],
			[/^collabo_d_1_ur$/, "联动D1"],
			[/^collabo_d_2_ur$/, "联动D2"],
			[/^collabo_i_2_ur$/, "联动I2"],
			[/^3rd_general_election_r$/, "第3届总选举"],
			[/^4th_general_election_r$/, "第4届总选举"],
			[/^2nd_general_election_r$/, "第2届总选举"],
			[/^2018_dog$/, "戌年2018"],
			[/^2021af$/, "周年祭2021"],
			[/^girlparty2019$/, "少女派对2019"],
			[/^kirameki_festival$/, "闪耀祭"],
			[/^kirameki_festival_coat$/, "闪耀祭外套"],
			[/^precious_summer$/, "珍贵夏日"],
			[/^special_5th$/, "5周年特别"],
			[/^miku_migikata$/, "初音联动·右肩"],
			[/^live_default$/, "默认演出"],
			[/^live_r_(\d{4})$/, "演出R$1"],
			[/^live_r$/, "演出R"],
			[/^live_sr_(\d+)$/, "演出SR$1"],
			[/^live_ssr_(\d+)$/, "演出SSR$1"],
			[/^live_event_(\d+)_([a-z]+)$/, (m, n, r) => `活动${+n} ${r.toUpperCase()}`],
			[/^live_event_(\d+)$/, (m, n) => `活动${+n}`],
			[/^event_(\d+)_story_(\d+)$/, "活动$1剧情$2"]
		];
		/**
		* 从模型目录名中提取展示标签（中文）。
		* `047_live_event_41_sr` → 「活动41 SR」；未命中规则的段名回退原始段名。
		*/
		function textureLabel(dir) {
			const seg = dir.split("/").pop();
			const body = seg.replace(/^\d{3}_/, "");
			for (const [re, out] of LABEL_RULES) if (re.test(body)) return body.replace(re, out);
			return seg;
		}
		/** 去掉目录名末尾的中文标签，得到原始资源 id（本版本段名无中文标签，原样返回）。 */
		function stripTextureLabel(dir) {
			return dir.replace(/_\p{Script=Han}[\p{Script=Han}0-9A-Za-z]*$/u, "");
		}
		/** 由模型目录名得到平铺在 `assets/` 下的资源文件名。 */
		function textureAssetId(dir) {
			return stripTextureLabel(dir);
		}
		/**
		* 该换装是否有缩略图资源。本版本无逐套缩略图，一律返回 false（面板显示文字标签）。
		*/
		function hasTextureAsset(dir) {
			return false;
		}
		//#endregion
		//#region src/client/waifu/index.js
		const TOOL_TITLES = {
			"switch-model": "切换角色",
			"photo": "拍照",
			"info": "关于",
			"quit": "隐藏"
		};
		/** 轻量监听/定时器收集器：插件卸载时统一清理 */
		function createHooks() {
			const listeners = [];
			const intervals = [];
			return {
				on(target, event, fn) {
					target.addEventListener(event, fn);
					listeners.push([
						target,
						event,
						fn
					]);
				},
				interval(fn, ms) {
					intervals.push(setInterval(fn, ms));
				},
				stop() {
					for (const [target, event, fn] of listeners) try {
						target.removeEventListener(event, fn);
					} catch {}
					for (const id of intervals) clearInterval(id);
					listeners.length = 0;
					intervals.length = 0;
				}
			};
		}
		async function loadWidget(hooks) {
			document.body.insertAdjacentHTML("beforeend", `
    <div id="waifu-roselia">
      <canvas id="live2d-roselia" width="800" height="800"></canvas>
      <div id="waifu-tips-roselia"></div>
      <div id="waifu-tool-roselia"></div>
    </div>
    <div id="model-selection-panel-roselia" class="waifu-panel waifu-panel-roselia" style="display: none;"></div>
    <div id="texture-selection-panel-roselia" class="waifu-panel waifu-panel-roselia" style="display: none;"></div>`);
			const model = new Model();
			localStorage.removeItem("ro-waifu-display");
			sessionStorage.removeItem("roselia-waifu-text");
			const waifu = document.getElementById("waifu-roselia");
			const toolBar = document.getElementById("waifu-tool-roselia");
			const modelPanel = document.getElementById("model-selection-panel-roselia");
			const texturePanel = document.getElementById("texture-selection-panel-roselia");
			let selectedModelIndex = null;
			for (const panel of [modelPanel, texturePanel]) panel.addEventListener("wheel", (event) => event.stopPropagation(), {
				passive: true,
				capture: true
			});
			const drag = enableDrag(waifu);
			restorePosition(waifu);
			const waifuRect = () => waifu.getBoundingClientRect();
			function openPanel(panel) {
				panel.style.display = "block";
				const pw = panel.offsetWidth, ph = panel.offsetHeight;
				const rect = waifuRect();
				let left = rect.right + 8;
				if (left + pw > window.innerWidth - 8) left = rect.left - pw - 8;
				left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
				const top = Math.max(8, Math.min(rect.top, window.innerHeight - ph - 8));
				panel.style.position = "fixed";
				panel.style.left = left + "px";
				panel.style.top = top + "px";
				panel.style.right = "auto";
				panel.style.bottom = "auto";
			}
			function closePanels() {
				modelPanel.style.display = "none";
				texturePanel.style.display = "none";
			}
			tools["switch-model"].callback = () => {
				if (modelPanel.style.display !== "none") {
					closePanels();
					return;
				}
				renderModelPanel();
				openPanel(modelPanel);
			};
			tools["photo"].callback = () => {
				const url = model.capture();
				if (!url) {
					showMessage(model, {
						text: "呜……拍照失败了，再试一次吧？",
						motion: "sad01"
					}, 4e3, 10);
					return;
				}
				const a = document.createElement("a");
				a.href = url;
				a.download = `live2d-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-")}.png`;
				document.body.appendChild(a);
				a.click();
				a.remove();
				showMessage(model, {
					text: "拍好啦！这张照片，要好好珍藏哦！",
					motion: "smile01"
				}, 4e3, 10);
			};
			if (!Array.isArray(getConfig().tools)) getConfig().tools = Object.keys(tools);
			for (const tool of getConfig().tools) {
				if (!tools[tool]) continue;
				const { icon, callback } = tools[tool];
				toolBar.insertAdjacentHTML("beforeend", `<span id="waifu-tool-roselia-${tool}" title="${TOOL_TITLES[tool] || tool}">${decodeURIComponent(icon).replace("data:image/svg+xml,", "")}</span>`);
				document.getElementById(`waifu-tool-roselia-${tool}`).addEventListener("click", callback);
			}
			function renderModelPanel() {
				let html = "";
				modelList.forEach((textures, index) => {
					const char = CHARACTERS[index];
					const asset = `${getConfig().cdnPath}assets/chara_icon_${char.num}.png`;
					html += `
            <button class="model-option" data-model-index="${index}" style="--accent:${char.color}">
              <img src="${asset}" alt="${char.name}" loading="lazy">
              <span class="model-option-text">
                <span class="model-option-name">${char.name}</span>
                <span class="model-option-en">${char.en}</span>
              </span>
            </button>`;
				});
				modelPanel.innerHTML = `
            <div class="waifu-panel-header"><span>选择角色</span><button class="waifu-panel-close" aria-label="关闭">✕</button></div>
            <div class="waifu-panel-body">${html}</div>`;
			}
			function renderTexturePanel(charIndex) {
				const char = CHARACTERS[charIndex];
				const textures = modelList[charIndex];
				let html = "";
				textures.forEach((dir, index) => {
					const label = textureLabel(dir);
					const base = textureAssetId(dir);
					const asset = `${getConfig().cdnPath}assets/${base}.png`;
					if (hasTextureAsset(dir)) html += `
                <button class="texture-option" data-texture-index="${index}">
                  <img src="${asset}" alt="${label}" loading="lazy">
                  <span>${label}</span>
                </button>`;
					else html += `
                <button class="texture-option texture-option-text" data-texture-index="${index}">
                  <span>${label}</span>
                </button>`;
				});
				texturePanel.innerHTML = `
            <div class="waifu-panel-header">
              <button class="waifu-panel-back" aria-label="返回">←</button>
              <span>${char.name} · 换装</span>
              <button class="waifu-panel-close" aria-label="关闭">✕</button>
            </div>
            <div class="waifu-panel-body">${html}</div>`;
			}
			hooks.on(modelPanel, "click", async (event) => {
				if (event.target.closest(".waifu-panel-close")) {
					closePanels();
					return;
				}
				const button = event.target.closest(".model-option");
				if (!button) return;
				selectedModelIndex = parseInt(button.getAttribute("data-model-index"), 10);
				renderTexturePanel(selectedModelIndex);
				modelPanel.style.display = "none";
				openPanel(texturePanel);
			});
			hooks.on(texturePanel, "click", async (event) => {
				if (event.target.closest(".waifu-panel-close")) {
					closePanels();
					return;
				}
				if (event.target.closest(".waifu-panel-back")) {
					texturePanel.style.display = "none";
					openPanel(modelPanel);
					return;
				}
				const button = event.target.closest(".texture-option");
				if (!button) return;
				const textureIndex = parseInt(button.getAttribute("data-texture-index"), 10);
				closePanels();
				await model.loadModel(selectedModelIndex, textureIndex);
			});
			hooks.on(document, "click", (event) => {
				if (event.target.closest("#model-selection-panel-roselia") || event.target.closest("#texture-selection-panel-roselia") || event.target.closest("#waifu-tool-roselia") || event.target.closest("#waifu-toggle-roselia")) return;
				closePanels();
			});
			hooks.on(document, "keydown", (event) => {
				if (event.key === "Escape") closePanels();
			});
			registerEventListener(model, drag, hooks);
			const api = {
				loadModel: (charId, texId) => model.loadModel(charId, texId),
				getModelList: () => modelList,
				getState: () => ({
					modelId: getModelId(),
					modelTexturesId: getModelTexturesId()
				}),
				capture: () => model.capture(),
				playRandomIdle: () => model.playRandomIdle(),
				showMessage,
				debug: () => ({
					stageChildren: model.app.stage.children.length,
					modelLoaded: !!model.model,
					modelSize: model.model ? {
						w: Math.round(model.model.width),
						h: Math.round(model.model.height)
					} : null,
					appRunning: !!(model.app.ticker && model.app.ticker.started),
					canvas: model.app.view ? {
						id: model.app.view.id,
						w: model.app.view.width,
						h: model.app.view.height
					} : null,
					pixiVersion: window.PIXI && window.PIXI.VERSION
				})
			};
			window.L2D = api;
			if (getModelId() === null) resetModelState();
			await model.loadModel(getModelId(), getModelTexturesId());
			return () => {
				hooks.stop();
				clearMessageTimer();
				try {
					model.app.destroy(true);
				} catch {}
				for (const el of [
					waifu,
					modelPanel,
					texturePanel
				]) try {
					if (el && el.parentNode) el.parentNode.removeChild(el);
				} catch {}
				if (window.L2D === api) window.L2D = void 0;
			};
		}
		function enableDrag(widgetEl) {
			const drag = {
				active: false,
				moved: false,
				startX: 0,
				startY: 0,
				originX: 0,
				originY: 0
			};
			widgetEl.addEventListener("pointerdown", (event) => {
				if (event.target.closest("#waifu-tool-roselia") || event.target.closest(".waifu-panel-roselia") || event.target.closest("#waifu-toggle-roselia")) return;
				drag.active = true;
				drag.moved = false;
				drag.startX = event.clientX;
				drag.startY = event.clientY;
				const rect = widgetEl.getBoundingClientRect();
				drag.originX = rect.left;
				drag.originY = rect.top;
				widgetEl.classList.add("waifu-dragging");
				try {
					widgetEl.setPointerCapture(event.pointerId);
				} catch (error) {}
			});
			widgetEl.addEventListener("pointermove", (event) => {
				if (!drag.active) return;
				const dx = event.clientX - drag.startX;
				const dy = event.clientY - drag.startY;
				if (!drag.moved && Math.abs(dx) + Math.abs(dy) > 6) drag.moved = true;
				if (!drag.moved) return;
				const left = Math.min(Math.max(drag.originX + dx, -120), window.innerWidth - 40);
				const top = Math.min(Math.max(drag.originY + dy, -80), window.innerHeight - 40);
				widgetEl.style.left = left + "px";
				widgetEl.style.top = top + "px";
				widgetEl.style.right = "auto";
				widgetEl.style.bottom = "auto";
			});
			const endDrag = (event) => {
				if (!drag.active) return;
				drag.active = false;
				widgetEl.classList.remove("waifu-dragging");
				if (drag.moved) {
					const rect = widgetEl.getBoundingClientRect();
					try {
						localStorage.setItem("ro-waifu-pos", JSON.stringify({
							left: rect.left,
							top: rect.top
						}));
					} catch (error) {}
				}
			};
			widgetEl.addEventListener("pointerup", endDrag);
			widgetEl.addEventListener("pointercancel", endDrag);
			return drag;
		}
		function restorePosition(widgetEl) {
			try {
				const pos = JSON.parse(localStorage.getItem("ro-waifu-pos"));
				if (!pos || typeof pos.left !== "number" || typeof pos.top !== "number") return;
				const left = Math.min(Math.max(pos.left, -120), window.innerWidth - 40);
				const top = Math.min(Math.max(pos.top, -80), window.innerHeight - 40);
				widgetEl.style.left = left + "px";
				widgetEl.style.top = top + "px";
				widgetEl.style.right = "auto";
				widgetEl.style.bottom = "auto";
			} catch (error) {}
		}
		function registerEventListener(model, drag, hooks) {
			let userAction = false;
			let idleSeconds = 0;
			let lastHoverElement;
			let lastFocusTime = 0;
			hooks.on(window, "mousemove", (event) => {
				userAction = true;
				const now = Date.now();
				if (now - lastFocusTime > 50) {
					lastFocusTime = now;
					model.focusAt(event.clientX, event.clientY);
				}
			});
			hooks.on(window, "mousedown", () => userAction = true);
			hooks.on(window, "keydown", () => userAction = true);
			hooks.on(window, "scroll", () => userAction = true, true);
			hooks.interval(() => {
				if (userAction) {
					userAction = false;
					idleSeconds = 0;
					return;
				}
				idleSeconds++;
				if (idleSeconds === 18) showMessage(model, getMessageArray(), 6e3, 9);
				else if (idleSeconds > 18 && idleSeconds % 30 === 0) model.playRandomIdle();
			}, 1e3);
			hooks.on(window, "mouseover", (event) => {
				if (event.target.closest("#live2d-roselia")) {
					showMessage(model, getMessageArray(), 4e3, 9);
					return;
				}
				for (const { selector, text } of tips.mouseover) {
					if (!event.target.closest(selector)) continue;
					if (lastHoverElement === selector) return;
					lastHoverElement = selector;
					showMessage(model, randomSelection(text[getModelId()]), 4e3, 10);
					return;
				}
			});
			hooks.on(window, "click", (event) => {
				if (drag.moved) return;
				if (event.target.closest("#live2d-roselia")) {
					showMessage(model, getMessageArray(), 4e3, 9);
					return;
				}
				for (const { selector, text } of tips.mouseover) {
					if (!event.target.closest(selector)) continue;
					showMessage(model, randomSelection(text[getModelId()]), 4e3, 10);
					return;
				}
			});
			hooks.on(window, "resize", () => {
				const threshold = 160;
				const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
				const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
				if (widthDiff > threshold || heightDiff > threshold) showMessage(model, tips.message.console[getModelId()], 6e3, 9);
			});
			hooks.on(window, "copy", () => {
				showMessage(model, tips.message.copy[getModelId()], 6e3, 9);
			});
			hooks.on(document, "visibilitychange", () => {
				if (!document.hidden) showMessage(model, tips.message.visibilitychange[getModelId()], 6e3, 9);
			});
		}
		/**
		* 启动桌宠。返回停止函数（插件卸载时调用）：清理监听/定时器、销毁渲染器、移除 DOM。
		*/
		async function initWidget(config) {
			const hooks = createHooks();
			setConfig(config);
			document.getElementById("waifu-toggle-roselia")?.remove();
			document.getElementById("waifu-roselia")?.remove();
			document.body.insertAdjacentHTML("beforeend", `<div id="waifu-toggle-roselia"><span>Live2D</span></div>`);
			const toggle = document.getElementById("waifu-toggle-roselia");
			let stopWidget = () => {};
			const toggleStop = () => {
				hooks.stop();
				try {
					if (toggle && toggle.parentNode) toggle.parentNode.removeChild(toggle);
				} catch {}
				stopWidget();
			};
			hooks.on(toggle, "click", async () => {
				toggle.classList.remove("waifu-toggle-active");
				if (toggle.getAttribute("first-time")) {
					stopWidget = await loadWidget(hooks);
					toggle.removeAttribute("first-time");
				} else {
					localStorage.removeItem("ro-waifu-display");
					const waifuEl = document.getElementById("waifu-roselia");
					if (waifuEl) {
						waifuEl.style.display = "";
						setTimeout(() => {
							waifuEl.style.bottom = "20px";
						}, 0);
					}
				}
			});
			if (localStorage.getItem("ro-waifu-display") && Date.now() - localStorage.getItem("ro-waifu-display") <= 864e5) {
				toggle.setAttribute("first-time", true);
				setTimeout(() => {
					toggle.classList.add("waifu-toggle-active");
				}, 0);
			} else stopWidget = await loadWidget(hooks);
			return toggleStop;
		}
		//#endregion
		//#region src/client/waifuCss.ts
		var waifuCss_default = "/* ============ 侧边开关（隐藏后用于唤回） ============ */\n#waifu-toggle-roselia {\n  background: linear-gradient(180deg, #9b8cff, #6b5ce7);\n  border-radius: 6px 6px 0 0;\n  bottom: 374px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 12px;\n  left: 0;\n  margin-left: -100px;\n  padding: 6px 3px 6px 6px;\n  position: fixed;\n  transition: margin-left 1s;\n  width: 60px;\n  writing-mode: vertical-rl;\n  z-index: 998;\n  letter-spacing: 2px;\n  box-shadow: 0 2px 8px rgba(107, 92, 231, 0.35);\n}\n\n#waifu-toggle-roselia.waifu-toggle-active {\n  margin-left: -50px;\n}\n\n#waifu-toggle-roselia.waifu-toggle-active:hover {\n  margin-left: -30px;\n}\n\n/* ============ 主体容器 ============ */\n#waifu-roselia {\n  bottom: 20px;\n  left: -40px;\n  line-height: 0;\n  margin-bottom: 0;\n  position: fixed;\n  transform: translateY(0);\n  transition: transform 0.3s ease-in-out, bottom 3s ease-in-out;\n  z-index: 997;\n  touch-action: none; /* 拖拽时不触发页面手势 */\n}\n\n#waifu-roselia:not(.waifu-dragging):hover {\n  transform: translateY(-5px);\n}\n\n#waifu-roselia.waifu-dragging {\n  cursor: grabbing;\n  user-select: none;\n}\n\n/* ============ 气泡 ============ */\n#waifu-tips-roselia {\n  animation: shake 50s ease-in-out 5s infinite;\n  background: rgba(255, 255, 255, 0.92);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border: 1px solid rgba(107, 92, 231, 0.15);\n  border-radius: 14px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);\n  font-size: 14px;\n  line-height: 24px;\n  margin: -30px 30px;\n  min-height: 86px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 10px 12px;\n  position: absolute;\n  text-overflow: ellipsis;\n  transition: opacity 1s;\n  width: 240px;\n  word-break: break-all;\n  top: 0;\n  left: 20px;\n  pointer-events: none;\n  color: #333;\n}\n\n#waifu-tips-roselia::after {\n  content: \"\";\n  position: absolute;\n  left: 30px;\n  bottom: -8px;\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-top: 8px solid rgba(255, 255, 255, 0.92);\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.08));\n}\n\n#waifu-tips-roselia.waifu-tips-active {\n  opacity: 1;\n  transition: opacity 0.2s;\n}\n\n#waifu-tips-roselia span {\n  color: #6b5ce7;\n  font-weight: 600;\n}\n\n/* ============ 画布 ============ */\n#live2d-roselia {\n  cursor: grab;\n  height: 400px;\n  position: relative;\n  width: 400px;\n}\n\n#live2d-roselia:active {\n  cursor: grabbing;\n}\n\n/* ============ 工具按钮栏 ============ */\n#waifu-tool-roselia {\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-radius: 12px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);\n  color: #aaa;\n  opacity: 0;\n  padding: 6px 4px;\n  position: absolute;\n  right: 96px;\n  top: 56px;\n  transition: opacity 0.6s;\n  z-index: 5;\n}\n\n#waifu-roselia:hover #waifu-tool-roselia,\n#waifu-tool-roselia:hover {\n  opacity: 1;\n}\n\n#waifu-tool-roselia span {\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n}\n\n#waifu-tool-roselia svg {\n  fill: #7b8c9d;\n  cursor: pointer;\n  height: 22px;\n  vertical-align: middle;\n  transition: fill 0.3s, transform 0.3s;\n}\n\n#waifu-tool-roselia svg:hover {\n  fill: #6b5ce7;\n  transform: scale(1.15);\n}\n\n/* ============ 选择面板 ============ */\n.waifu-panel {\n  display: none;\n  position: fixed;\n  z-index: 999;\n  background: rgba(24, 22, 40, 0.94);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(139, 124, 255, 0.25);\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);\n  color: #eee;\n  width: 300px;\n  max-height: 70vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.waifu-panel-header {\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  gap: 8px;\n  justify-content: space-between;\n  padding: 10px 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #cfc7ff;\n  border-bottom: 1px solid rgba(139, 124, 255, 0.15);\n}\n\n.waifu-panel-header .waifu-panel-back {\n  background: none;\n  border: none;\n  color: #cfc7ff;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 2px 6px;\n  border-radius: 6px;\n}\n\n.waifu-panel-header .waifu-panel-back:hover {\n  background: rgba(139, 124, 255, 0.2);\n}\n\n.waifu-panel-close {\n  background: none;\n  border: none;\n  color: #9a93c4;\n  cursor: pointer;\n  font-size: 15px;\n  padding: 2px 6px;\n  border-radius: 6px;\n}\n\n.waifu-panel-close:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n}\n\n.waifu-panel-body {\n  flex: 1 1 auto;\n  min-height: 0;                 /* 关键：flex 子项允许收缩，否则长列表撑破 max-height 后被裁剪无法滚动 */\n  max-height: calc(70vh - 48px); /* 双保险：即使 flex 计算异常，body 本身也被限制为可滚区域 */\n  overflow-y: auto;\n  overscroll-behavior: contain;  /* 滚动不穿透到页面/后台容器 */\n  padding: 10px;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(139, 124, 255, 0.4) transparent;\n}\n\n.waifu-panel-body::-webkit-scrollbar {\n  width: 6px;\n}\n\n.waifu-panel-body::-webkit-scrollbar-thumb {\n  background: rgba(139, 124, 255, 0.4);\n  border-radius: 3px;\n}\n\n.waifu-panel-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n/* --- 角色按钮 --- */\n#model-selection-panel-roselia .model-option {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  color: #eee;\n  cursor: pointer;\n  display: flex;\n  gap: 10px;\n  margin-bottom: 6px;\n  padding: 6px 8px;\n  text-align: left;\n  transition: background 0.25s, border-color 0.25s, transform 0.15s;\n  width: 100%;\n}\n\n#model-selection-panel-roselia .model-option:hover {\n  background: rgba(139, 124, 255, 0.18);\n  border-color: var(--accent, #8f7bff);\n  transform: translateX(2px);\n}\n\n#model-selection-panel-roselia .model-option img {\n  border-radius: 8px;\n  display: block;\n  height: 44px;\n  object-fit: cover;\n  width: 44px;\n  background: rgba(255, 255, 255, 0.08);\n}\n\n#model-selection-panel-roselia .model-option-text {\n  display: flex;\n  flex-direction: column;\n}\n\n#model-selection-panel-roselia .model-option-name {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n#model-selection-panel-roselia .model-option-en {\n  color: #8f88b8;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n/* --- 换装按钮 --- */\n#texture-selection-panel-roselia .waifu-panel-body {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n\n#texture-selection-panel-roselia .texture-option {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  color: #ddd;\n  cursor: pointer;\n  font-size: 11px;\n  overflow: hidden;\n  padding: 0;\n  text-align: center;\n  transition: background 0.25s, border-color 0.25s, transform 0.15s;\n}\n\n#texture-selection-panel-roselia .texture-option:hover {\n  background: rgba(139, 124, 255, 0.2);\n  border-color: #8f7bff;\n  transform: translateY(-2px);\n}\n\n#texture-selection-panel-roselia .texture-option img {\n  aspect-ratio: 1 / 1;\n  display: block;\n  object-fit: cover;\n  width: 100%;\n  height: auto;\n  border-radius: 8px 8px 0 0;\n}\n\n#texture-selection-panel-roselia .texture-option span {\n  display: block;\n  padding: 4px 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#texture-selection-panel-roselia .texture-option-text {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-height: 56px;\n  font-size: 12px;\n}\n\n#texture-selection-panel-roselia .texture-option-text span {\n  padding: 8px 4px;\n}\n\n/* ============ 摇晃动画 ============ */\n@keyframes shake {\n  2% { transform: translate(0.5px, -1.5px) rotate(-0.5deg); }\n  4% { transform: translate(0.5px, 1.5px) rotate(1.5deg); }\n  6% { transform: translate(1.5px, 1.5px) rotate(1.5deg); }\n  8% { transform: translate(2.5px, 1.5px) rotate(0.5deg); }\n  10% { transform: translate(0.5px, 2.5px) rotate(0.5deg); }\n  12% { transform: translate(1.5px, 1.5px) rotate(0.5deg); }\n  14% { transform: translate(0.5px, 0.5px) rotate(0.5deg); }\n  16% { transform: translate(-1.5px, -0.5px) rotate(1.5deg); }\n  18% { transform: translate(0.5px, 0.5px) rotate(1.5deg); }\n  20% { transform: translate(2.5px, 2.5px) rotate(1.5deg); }\n  22% { transform: translate(0.5px, -1.5px) rotate(1.5deg); }\n  24% { transform: translate(-1.5px, 1.5px) rotate(-0.5deg); }\n  26% { transform: translate(1.5px, 0.5px) rotate(1.5deg); }\n  28% { transform: translate(-0.5px, -0.5px) rotate(-0.5deg); }\n  30% { transform: translate(1.5px, -0.5px) rotate(-0.5deg); }\n  32% { transform: translate(2.5px, -1.5px) rotate(1.5deg); }\n  34% { transform: translate(2.5px, 2.5px) rotate(-0.5deg); }\n  36% { transform: translate(0.5px, -1.5px) rotate(0.5deg); }\n  38% { transform: translate(2.5px, -0.5px) rotate(-0.5deg); }\n  40% { transform: translate(-0.5px, 2.5px) rotate(0.5deg); }\n  42% { transform: translate(-1.5px, 2.5px) rotate(0.5deg); }\n  44% { transform: translate(-1.5px, 1.5px) rotate(0.5deg); }\n  46% { transform: translate(1.5px, -0.5px) rotate(-0.5deg); }\n  48% { transform: translate(2.5px, -0.5px) rotate(0.5deg); }\n  50% { transform: translate(-1.5px, 1.5px) rotate(0.5deg); }\n  52% { transform: translate(-0.5px, 1.5px) rotate(0.5deg); }\n  54% { transform: translate(-1.5px, 1.5px) rotate(0.5deg); }\n  56% { transform: translate(0.5px, 2.5px) rotate(1.5deg); }\n  58% { transform: translate(2.5px, 2.5px) rotate(0.5deg); }\n  60% { transform: translate(2.5px, -1.5px) rotate(1.5deg); }\n  62% { transform: translate(-1.5px, 0.5px) rotate(1.5deg); }\n  64% { transform: translate(-1.5px, 1.5px) rotate(1.5deg); }\n  66% { transform: translate(0.5px, 2.5px) rotate(1.5deg); }\n  68% { transform: translate(2.5px, -1.5px) rotate(1.5deg); }\n  70% { transform: translate(2.5px, 2.5px) rotate(0.5deg); }\n  72% { transform: translate(-0.5px, -1.5px) rotate(1.5deg); }\n  74% { transform: translate(-1.5px, 2.5px) rotate(1.5deg); }\n  76% { transform: translate(-1.5px, 2.5px) rotate(1.5deg); }\n  78% { transform: translate(-1.5px, 2.5px) rotate(0.5deg); }\n  80% { transform: translate(-1.5px, 0.5px) rotate(-0.5deg); }\n  82% { transform: translate(-1.5px, 0.5px) rotate(-0.5deg); }\n  84% { transform: translate(-0.5px, 0.5px) rotate(1.5deg); }\n  86% { transform: translate(2.5px, 1.5px) rotate(0.5deg); }\n  88% { transform: translate(-1.5px, 0.5px) rotate(1.5deg); }\n  90% { transform: translate(-1.5px, -0.5px) rotate(-0.5deg); }\n  92% { transform: translate(-1.5px, -1.5px) rotate(1.5deg); }\n  94% { transform: translate(0.5px, 0.5px) rotate(-0.5deg); }\n  96% { transform: translate(2.5px, -0.5px) rotate(-0.5deg); }\n  98% { transform: translate(-1.5px, -1.5px) rotate(-0.5deg); }\n  0%, 100% { transform: translate(0, 0) rotate(0); }\n}\n\n/* ============ 小屏适配 ============ */\n@media (max-width: 640px) {\n  #waifu-tips-roselia {\n    width: 200px;\n    font-size: 13px;\n  }\n\n  #waifu-tool-roselia {\n    right: 88px;\n  }\n\n  .waifu-panel {\n    width: min(300px, calc(100vw - 24px));\n    max-height: 60vh;\n  }\n\n  .waifu-panel-body {\n    max-height: calc(60vh - 48px);\n  }\n}\n";
		//#endregion
		//#region src/client/index.ts
		/** vendor 运行时脚本（host 同源路由，按依赖顺序加载）。
		*  Cubism 2.1 渲染链：live2d.min.js（框架，暴露 window.Live2D / Live2DModelWebGL）
		*  → pixi.min.js（PIXI 6）→ live2d-display.cubism2.min.js（pixi-live2d-display
		*  0.4.0 的 cubism2 版，运行时校验 window.Live2D 存在）。
		*  Cubism 2.1 不需要 live2dcubismcore.min.js（那是 Cubism 4 链的依赖）。
		*/
		const VENDOR_SCRIPTS = [
			"/ro-assets/vendor/live2d.min.js",
			"/ro-assets/vendor/pixi.min.js",
			"/ro-assets/vendor/live2d-display.cubism2.min.js"
		];
		/** 桌宠容器与面板的 z-index 覆盖（dsh GUI 上方悬浮）+ 默认放右下（避开左侧栏）。 */
		const Z_INDEX_OVERRIDE = `
#waifu-roselia, #waifu-toggle-roselia { z-index: 2147483646 !important; }
.waifu-panel { z-index: 2147483647 !important; }
#waifu-roselia { left: auto; right: 460px; top: auto; bottom: 20px; }
`;
		function loadScript(src) {
			return new Promise((resolve, reject) => {
				const tag = document.createElement("script");
				tag.src = src;
				tag.onload = () => resolve();
				tag.onerror = () => reject(/* @__PURE__ */ new Error(`加载 ${src} 失败`));
				document.head.appendChild(tag);
			});
		}
		/** 插件入口：注入 CSS + 按序加载运行时 + 启动桌宠；清理注册为 ctx.effect disposer。 */
		function apply(ctx) {
			ctx.effect(() => {
				const cleanup = [];
				let disposed = false;
				const stop = () => {
					if (disposed) return;
					disposed = true;
					for (const fn of cleanup) try {
						fn();
					} catch {}
					cleanup.length = 0;
				};
				const style = document.createElement("style");
				style.id = "live2d-roselia-css";
				style.textContent = waifuCss_default + Z_INDEX_OVERRIDE;
				document.head.appendChild(style);
				cleanup.push(() => style.remove());
				(async () => {
					for (const src of VENDOR_SCRIPTS) {
						await loadScript(src);
						if (disposed) return;
					}
					if (disposed) return;
					try {
						await initWidget({
							cdnPath: "/ro-assets/",
							preload: "IDLE",
							tools: [
								"switch-model",
								"photo",
								"info",
								"quit"
							]
						});
					} catch (error) {
						console.error("[live2d-roselia 桌宠启动失败", error);
					}
				})();
				return stop;
			}, "live2d-roselia: widget");
		}
		//#endregion
		exports.apply = apply;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map