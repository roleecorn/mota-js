///<reference path='./info.d.ts'/>

import { Ref, ref } from "vue";
import { actionAttributes, composition, units, sprites } from "./info";

export const list: Ref<BaseAction<any>[]> = ref([]);
// @ts-ignore
window.list = list;

/** 每个action的根类 */
export class BaseAction<K extends keyof SpriteDrawInfoMap> {
    static cnt = 0
    type: K
    data!: SpriteDrawInfoMap[K];
    /** 是否展开了详细信息 */
    detailed = false
    cnt = BaseAction.cnt++

    /** 作用于的sprite */
    sprite: Ref<string>

    /** 有没有成功创建这个实例 */
    success = false

    constructor(type: K) {
        this.type = type;
        const data = this.generateBaseData();
        this.sprite = ref(Object.keys(sprites)[0] || '');
        if (!data) return;
        this.data = data;
        this.success = true;
        this.addSprite();
    }

    generateBaseData() {
        // @ts-ignore
        const data: SpriteDrawInfoMap[K] = {};
        const all = Object.values(sprites);
        if (!all[0] && this.type !== 'create') return core.drawTip('请先创建画布');
        const info = actionAttributes[this.type];
        for (const key in info) {
            // @ts-ignore
            const [name, type] = info[key] as string[];
            let value: any = '';
            if (!type.includes('|')) {
                if (type === 'number') value = 0;
                else if (type === 'boolean') value = false;
                else if (type === 'number_u') value = '0px';
                else if (type === 'number_time') value = '0ms';
                else if (/^Array<[a-zA-Z,_]+>$/.test(type)) value = [];
                else if (/^string_(icon|img)$/.test(type)) value = '';
                else if (/^string(_multi)?$/.test(type)) value = '';
                else throw new ReferenceError(`Nonexistent type exists.`);
            } else {
                const all = type.split('|');
                value = all[0];
                if (all.includes('source-over')) value = 'source-over';
            }
            // @ts-ignore
            data[key] = value;
        }
        return data;
    }

    addSprite() {
        if (this.type !== 'create') return;
        const sprite = new Sprite(0, 0, 0, 0, 0, 'game');
        (this as BaseAction<'create'>).data.name = sprite.name;
        sprite.setCss('display: none;');
        sprites[sprite.name] = sprite;
    }
}