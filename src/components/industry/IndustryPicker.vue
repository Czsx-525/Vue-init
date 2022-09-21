<template>
  <div>
    <van-cascader
      v-model="cascaderValue"
      title="请选择行业"
      :options="industryData"
      :field-names="fieldNames"
      @close="$emit('close')"
      @finish="onFinish"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'IndustryPicker',

  setup (props, context) {
    const cascaderValue = ref('')
    const fieldNames = {
      text: 'itemname',
      value: 'itemno',
      children: 'children'
    }
    const industryData = [
      {
        itemno: 'A',
        itemname: '农、林、牧、渔业',
        children: [
          {
            itemno: 'A01',
            itemname: '农业',
            children: [
              {
                itemno: 'A011',
                itemname: '谷物种植',
                children: [
                  {
                    itemno: 'A0111',
                    itemname: '稻谷种植'
                  },
                  {
                    itemno: 'A0112',
                    itemname: '小麦种植'
                  },
                  {
                    itemno: 'A0113',
                    itemname: '玉米种植'
                  },
                  {
                    itemno: 'A0119',
                    itemname: '其他谷物种植'
                  }
                ]
              },
              {
                itemno: 'A012',
                itemname: '豆类、油料和薯类种植',
                children: [
                  {
                    itemno: 'A0121',
                    itemname: '豆类种植'
                  },
                  {
                    itemno: 'A0122',
                    itemname: '油料种植'
                  },
                  {
                    itemno: 'A0123',
                    itemname: '薯类种植'
                  }
                ]
              },
              {
                itemno: 'A013',
                itemname: '棉、麻、糖、烟草种植',
                children: [
                  {
                    itemno: 'A0131',
                    itemname: '棉花种植'
                  },
                  {
                    itemno: 'A0132',
                    itemname: '麻类种植'
                  },
                  {
                    itemno: 'A0133',
                    itemname: '糖料种植'
                  },
                  {
                    itemno: 'A0134',
                    itemname: '烟草种植'
                  }
                ]
              },
              {
                itemno: 'A014',
                itemname: '蔬菜、食用菌及园艺作物种植',
                children: [
                  {
                    itemno: 'A0141',
                    itemname: '蔬菜种植'
                  },
                  {
                    itemno: 'A0142',
                    itemname: '食用菌种植'
                  },
                  {
                    itemno: 'A0143',
                    itemname: '花卉种植'
                  },
                  {
                    itemno: 'A0149',
                    itemname: '其他园艺作物种植'
                  }
                ]
              },
              {
                itemno: 'A015',
                itemname: '水果种植',
                children: [
                  {
                    itemno: 'A0151',
                    itemname: '仁果类和核果类水果种植'
                  },
                  {
                    itemno: 'A0152',
                    itemname: '葡萄种植'
                  },
                  {
                    itemno: 'A0153',
                    itemname: '柑橘类种植'
                  },
                  {
                    itemno: 'A0154',
                    itemname: '香蕉等亚热带水果种植'
                  },
                  {
                    itemno: 'A0159',
                    itemname: '其他水果种植'
                  }
                ]
              },
              {
                itemno: 'A016',
                itemname: '坚果、含油果、香料和饮料作物种植',
                children: [
                  {
                    itemno: 'A0161',
                    itemname: '坚果种植'
                  },
                  {
                    itemno: 'A0162',
                    itemname: '含油果种植'
                  },
                  {
                    itemno: 'A0163',
                    itemname: '香料作物种植'
                  },
                  {
                    itemno: 'A0164',
                    itemname: '茶叶种植'
                  },
                  {
                    itemno: 'A0169',
                    itemname: '其他饮料作物种植'
                  }
                ]
              },
              {
                itemno: 'A017',
                itemname: '中药材种植',
                children: [
                  {
                    itemno: 'A0171',
                    itemname: '中草药种植'
                  },
                  {
                    itemno: 'A0179',
                    itemname: '其他中药材种植'
                  }
                ]
              },
              {
                itemno: 'A018',
                itemname: '草种植及割草',
                children: [
                  {
                    itemno: 'A0181',
                    itemname: '草种植'
                  },
                  {
                    itemno: 'A0182',
                    itemname: '天然草原割草'
                  }
                ]
              },
              {
                itemno: 'A019',
                itemname: '其他农业',
                children: [
                  {
                    itemno: 'A0190',
                    itemname: '其他农业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'A02',
            itemname: '林业',
            children: [
              {
                itemno: 'A021',
                itemname: '林木育种和育苗',
                children: [
                  {
                    itemno: 'A0211',
                    itemname: '林木育种'
                  },
                  {
                    itemno: 'A0212',
                    itemname: '林木育苗'
                  }
                ]
              },
              {
                itemno: 'A022',
                itemname: '造林和更新',
                children: [
                  {
                    itemno: 'A0220',
                    itemname: '造林和更新'
                  }
                ]
              },
              {
                itemno: 'A023',
                itemname: '森林经营、管护和改培',
                children: [
                  {
                    itemno: 'A0231',
                    itemname: '森林经营和管护'
                  },
                  {
                    itemno: 'A0232',
                    itemname: '森林改培'
                  }
                ]
              },
              {
                itemno: 'A024',
                itemname: '木材和竹材采运',
                children: [
                  {
                    itemno: 'A0241',
                    itemname: '木材采运'
                  },
                  {
                    itemno: 'A0242',
                    itemname: '竹材采运'
                  }
                ]
              },
              {
                itemno: 'A025',
                itemname: '林产品采集',
                children: [
                  {
                    itemno: 'A0251',
                    itemname: '木竹材林产品采集'
                  },
                  {
                    itemno: 'A0252',
                    itemname: '非木竹材林产品采集'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'A03',
            itemname: '畜牧业',
            children: [
              {
                itemno: 'A031',
                itemname: '牲畜饲养',
                children: [
                  {
                    itemno: 'A0311',
                    itemname: '牛的饲养'
                  },
                  {
                    itemno: 'A0312',
                    itemname: '马的饲养'
                  },
                  {
                    itemno: 'A0313',
                    itemname: '猪的饲养'
                  },
                  {
                    itemno: 'A0314',
                    itemname: '羊的饲养'
                  },
                  {
                    itemno: 'A0315',
                    itemname: '骆驼饲养'
                  },
                  {
                    itemno: 'A0319',
                    itemname: '其他牲畜饲养'
                  }
                ]
              },
              {
                itemno: 'A032',
                itemname: '家禽饲养',
                children: [
                  {
                    itemno: 'A0321',
                    itemname: '鸡的饲养'
                  },
                  {
                    itemno: 'A0322',
                    itemname: '鸭的饲养'
                  },
                  {
                    itemno: 'A0323',
                    itemname: '鹅的饲养'
                  },
                  {
                    itemno: 'A0329',
                    itemname: '其他家禽饲养'
                  }
                ]
              },
              {
                itemno: 'A033',
                itemname: '狩猎和捕捉动物',
                children: [
                  {
                    itemno: 'A0330',
                    itemname: '狩猎和捕捉动物'
                  }
                ]
              },
              {
                itemno: 'A039',
                itemname: '其他畜牧业',
                children: [
                  {
                    itemno: 'A0391',
                    itemname: '兔的饲养'
                  },
                  {
                    itemno: 'A0392',
                    itemname: '蜜蜂饲养'
                  },
                  {
                    itemno: 'A0399',
                    itemname: '其他未列明畜牧业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'A04',
            itemname: '渔业',
            children: [
              {
                itemno: 'A041',
                itemname: '水产养殖',
                children: [
                  {
                    itemno: 'A0411',
                    itemname: '海水养殖'
                  },
                  {
                    itemno: 'A0412',
                    itemname: '内陆养殖'
                  }
                ]
              },
              {
                itemno: 'A042',
                itemname: '水产捕捞',
                children: [
                  {
                    itemno: 'A0421',
                    itemname: '海水捕捞'
                  },
                  {
                    itemno: 'A0422',
                    itemname: '内陆捕捞'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'A05',
            itemname: '农、林、牧、渔专业及辅助性活动',
            children: [
              {
                itemno: 'A051',
                itemname: '农业专业及辅助性活动',
                children: [
                  {
                    itemno: 'A0511',
                    itemname: '种子种苗培育活动'
                  },
                  {
                    itemno: 'A0512',
                    itemname: '农业机械活动'
                  },
                  {
                    itemno: 'A0513',
                    itemname: '灌溉活动'
                  },
                  {
                    itemno: 'A0514',
                    itemname: '农产品初加工活动'
                  },
                  {
                    itemno: 'A0515',
                    itemname: '农作物病虫害防治活动'
                  },
                  {
                    itemno: 'A0519',
                    itemname: '其他农业专业及辅助性活动'
                  }
                ]
              },
              {
                itemno: 'A052',
                itemname: '林业专业及辅助性活动',
                children: [
                  {
                    itemno: 'A0521',
                    itemname: '林业有害生物防治活动'
                  },
                  {
                    itemno: 'A0522',
                    itemname: '森林防火活动'
                  },
                  {
                    itemno: 'A0523',
                    itemname: '林产品初级加工活动'
                  },
                  {
                    itemno: 'A0529',
                    itemname: '其他林业专业及辅助性活动'
                  }
                ]
              },
              {
                itemno: 'A053',
                itemname: '畜牧专业及辅助性活动',
                children: [
                  {
                    itemno: 'A0531',
                    itemname: '畜牧良种繁殖活动'
                  },
                  {
                    itemno: 'A0532',
                    itemname: '畜禽粪污处理活动'
                  },
                  {
                    itemno: 'A0539',
                    itemname: '其他畜牧专业及辅助性活动'
                  }
                ]
              },
              {
                itemno: 'A054',
                itemname: '渔业专业及辅助性活动',
                children: [
                  {
                    itemno: 'A0541',
                    itemname: '鱼苗及鱼种场活动'
                  },
                  {
                    itemno: 'A0549',
                    itemname: '其他渔业专业及辅助性活动'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'B',
        itemname: '采矿业',
        children: [
          {
            itemno: 'B06',
            itemname: '煤炭开采和洗选业',
            children: [
              {
                itemno: 'B061',
                itemname: '烟煤和无烟煤开采洗选',
                children: [
                  {
                    itemno: 'B0610',
                    itemname: '烟煤和无烟煤开采洗选'
                  }
                ]
              },
              {
                itemno: 'B062',
                itemname: '褐煤开采洗选',
                children: [
                  {
                    itemno: 'B0620',
                    itemname: '褐煤开采洗选'
                  }
                ]
              },
              {
                itemno: 'B069',
                itemname: '其他煤炭采选',
                children: [
                  {
                    itemno: 'B0690',
                    itemname: '其他煤炭采选'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'B07',
            itemname: '石油和天然气开采业',
            children: [
              {
                itemno: 'B071',
                itemname: '石油开采',
                children: [
                  {
                    itemno: 'B0711',
                    itemname: '陆地石油开采'
                  },
                  {
                    itemno: 'B0712',
                    itemname: '海洋石油开采'
                  }
                ]
              },
              {
                itemno: 'B072',
                itemname: '天然气开采',
                children: [
                  {
                    itemno: 'B0721',
                    itemname: '陆地天然气开采'
                  },
                  {
                    itemno: 'B0722',
                    itemname: '海洋天然气及可燃冰开采'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'B08',
            itemname: '黑色金属矿采选业',
            children: [
              {
                itemno: 'B081',
                itemname: '铁矿采选',
                children: [
                  {
                    itemno: 'B0810',
                    itemname: '铁矿采选'
                  }
                ]
              },
              {
                itemno: 'B082',
                itemname: '锰矿、铬矿采选',
                children: [
                  {
                    itemno: 'B0820',
                    itemname: '锰矿、铬矿采选'
                  }
                ]
              },
              {
                itemno: 'B089',
                itemname: '其他黑色金属矿采选',
                children: [
                  {
                    itemno: 'B0890',
                    itemname: '其他黑色金属矿采选'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'B09',
            itemname: '有色金属矿采选业',
            children: [
              {
                itemno: 'B091',
                itemname: '常用有色金属矿采选',
                children: [
                  {
                    itemno: 'B0911',
                    itemname: '铜矿采选'
                  },
                  {
                    itemno: 'B0912',
                    itemname: '铅锌矿采选'
                  },
                  {
                    itemno: 'B0913',
                    itemname: '镍钴矿采选'
                  },
                  {
                    itemno: 'B0914',
                    itemname: '锡矿采选'
                  },
                  {
                    itemno: 'B0915',
                    itemname: '锑矿采选'
                  },
                  {
                    itemno: 'B0916',
                    itemname: '铝矿采选'
                  },
                  {
                    itemno: 'B0917',
                    itemname: '镁矿采选'
                  },
                  {
                    itemno: 'B0919',
                    itemname: '其他常用有色金属矿采选'
                  }
                ]
              },
              {
                itemno: 'B092',
                itemname: '贵金属矿采选',
                children: [
                  {
                    itemno: 'B0921',
                    itemname: '金矿采选'
                  },
                  {
                    itemno: 'B0922',
                    itemname: '银矿采选'
                  },
                  {
                    itemno: 'B0929',
                    itemname: '其他贵金属矿采选'
                  }
                ]
              },
              {
                itemno: 'B093',
                itemname: '稀有稀土金属矿采选',
                children: [
                  {
                    itemno: 'B0931',
                    itemname: '钨钼矿采选'
                  },
                  {
                    itemno: 'B0932',
                    itemname: '稀土金属矿采选'
                  },
                  {
                    itemno: 'B0933',
                    itemname: '放射性金属矿采选'
                  },
                  {
                    itemno: 'B0939',
                    itemname: '其他稀有金属矿采选'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'B10',
            itemname: '非金属矿采选业',
            children: [
              {
                itemno: 'B101',
                itemname: '土砂石开采',
                children: [
                  {
                    itemno: 'B1011',
                    itemname: '石灰石、石膏开采'
                  },
                  {
                    itemno: 'B1012',
                    itemname: '建筑装饰用石开采'
                  },
                  {
                    itemno: 'B1013',
                    itemname: '耐火土石开采'
                  },
                  {
                    itemno: 'B1019',
                    itemname: '粘土及其他土砂石开采'
                  }
                ]
              },
              {
                itemno: 'B102',
                itemname: '化学矿开采',
                children: [
                  {
                    itemno: 'B1020',
                    itemname: '化学矿开采'
                  }
                ]
              },
              {
                itemno: 'B103',
                itemname: '采盐',
                children: [
                  {
                    itemno: 'B1030',
                    itemname: '采盐'
                  }
                ]
              },
              {
                itemno: 'B109',
                itemname: '石棉及其他非金属矿采选',
                children: [
                  {
                    itemno: 'B1091',
                    itemname: '石棉、云母矿采选'
                  },
                  {
                    itemno: 'B1092',
                    itemname: '石墨、滑石采选'
                  },
                  {
                    itemno: 'B1093',
                    itemname: '宝石、玉石采选'
                  },
                  {
                    itemno: 'B1099',
                    itemname: '其他未列明非金属矿采选'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'B11',
            itemname: '开采专业及辅助性活动',
            children: [
              {
                itemno: 'B111',
                itemname: '煤炭开采和洗选专业及辅助性活动',
                children: [
                  {
                    itemno: 'B1110',
                    itemname: '煤炭开采和洗选专业及辅助性活动'
                  }
                ]
              },
              {
                itemno: 'B112',
                itemname: '石油和天然气开采专业及辅助性活动',
                children: [
                  {
                    itemno: 'B1120',
                    itemname: '石油和天然气开采专业及辅助性活动'
                  }
                ]
              },
              {
                itemno: 'B119',
                itemname: '其他开采专业及辅助性活动',
                children: [
                  {
                    itemno: 'B1190',
                    itemname: '其他开采专业及辅助性活动'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'B12',
            itemname: '其他采矿业',
            children: [
              {
                itemno: 'B120',
                itemname: '其他采矿业',
                children: [
                  {
                    itemno: 'B1200',
                    itemname: '其他采矿业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'C',
        itemname: '制造业',
        children: [
          {
            itemno: 'C13',
            itemname: '农副食品加工业',
            children: [
              {
                itemno: 'C131',
                itemname: '谷物磨制',
                children: [
                  {
                    itemno: 'C1311',
                    itemname: '稻谷加工'
                  },
                  {
                    itemno: 'C1312',
                    itemname: '小麦加工'
                  },
                  {
                    itemno: 'C1313',
                    itemname: '玉米加工'
                  },
                  {
                    itemno: 'C1314',
                    itemname: '杂粮加工'
                  },
                  {
                    itemno: 'C1319',
                    itemname: '其他谷物磨制'
                  }
                ]
              },
              {
                itemno: 'C132',
                itemname: '饲料加工',
                children: [
                  {
                    itemno: 'C1321',
                    itemname: '宠物饲料加工'
                  },
                  {
                    itemno: 'C1329',
                    itemname: '其他饲料加工'
                  }
                ]
              },
              {
                itemno: 'C133',
                itemname: '植物油加工',
                children: [
                  {
                    itemno: 'C1331',
                    itemname: '食用植物油加工'
                  },
                  {
                    itemno: 'C1332',
                    itemname: '非食用植物油加工'
                  }
                ]
              },
              {
                itemno: 'C134',
                itemname: '制糖业',
                children: [
                  {
                    itemno: 'C1340',
                    itemname: '制糖业'
                  }
                ]
              },
              {
                itemno: 'C135',
                itemname: '屠宰及肉类加工',
                children: [
                  {
                    itemno: 'C1351',
                    itemname: '牲畜屠宰'
                  },
                  {
                    itemno: 'C1352',
                    itemname: '禽类屠宰'
                  },
                  {
                    itemno: 'C1353',
                    itemname: '肉制品及副产品加工'
                  }
                ]
              },
              {
                itemno: 'C136',
                itemname: '水产品加工',
                children: [
                  {
                    itemno: 'C1361',
                    itemname: '水产品冷冻加工'
                  },
                  {
                    itemno: 'C1362',
                    itemname: '鱼糜制品及水产品干腌制加工'
                  },
                  {
                    itemno: 'C1363',
                    itemname: '鱼油提取及制品制造'
                  },
                  {
                    itemno: 'C1369',
                    itemname: '其他水产品加工'
                  }
                ]
              },
              {
                itemno: 'C137',
                itemname: '蔬菜、菌类、水果和坚果加工',
                children: [
                  {
                    itemno: 'C1371',
                    itemname: '蔬菜加工'
                  },
                  {
                    itemno: 'C1372',
                    itemname: '食用菌加工'
                  },
                  {
                    itemno: 'C1373',
                    itemname: '水果和坚果加工'
                  }
                ]
              },
              {
                itemno: 'C139',
                itemname: '其他农副食品加工',
                children: [
                  {
                    itemno: 'C1391',
                    itemname: '淀粉及淀粉制品制造'
                  },
                  {
                    itemno: 'C1392',
                    itemname: '豆制品制造'
                  },
                  {
                    itemno: 'C1393',
                    itemname: '蛋品加工'
                  },
                  {
                    itemno: 'C1399',
                    itemname: '其他未列明农副食品加工'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C14',
            itemname: '食品制造业',
            children: [
              {
                itemno: 'C141',
                itemname: '焙烤食品制造',
                children: [
                  {
                    itemno: 'C1411',
                    itemname: '糕点、面包制造'
                  },
                  {
                    itemno: 'C1419',
                    itemname: '饼干及其他焙烤食品制造'
                  }
                ]
              },
              {
                itemno: 'C142',
                itemname: '糖果、巧克力及蜜饯制造',
                children: [
                  {
                    itemno: 'C1421',
                    itemname: '糖果、巧克力制造'
                  },
                  {
                    itemno: 'C1422',
                    itemname: '蜜饯制作'
                  }
                ]
              },
              {
                itemno: 'C143',
                itemname: '方便食品制造',
                children: [
                  {
                    itemno: 'C1431',
                    itemname: '米、面制品制造'
                  },
                  {
                    itemno: 'C1432',
                    itemname: '速冻食品制造'
                  },
                  {
                    itemno: 'C1433',
                    itemname: '方便面制造'
                  },
                  {
                    itemno: 'C1439',
                    itemname: '其他方便食品制造'
                  }
                ]
              },
              {
                itemno: 'C144',
                itemname: '乳制品制造',
                children: [
                  {
                    itemno: 'C1441',
                    itemname: '液体乳制造'
                  },
                  {
                    itemno: 'C1442',
                    itemname: '乳粉制造'
                  },
                  {
                    itemno: 'C1449',
                    itemname: '其他乳制品制造'
                  }
                ]
              },
              {
                itemno: 'C145',
                itemname: '罐头食品制造',
                children: [
                  {
                    itemno: 'C1451',
                    itemname: '肉、禽类罐头制造'
                  },
                  {
                    itemno: 'C1452',
                    itemname: '水产品罐头制造'
                  },
                  {
                    itemno: 'C1453',
                    itemname: '蔬菜、水果罐头制造'
                  },
                  {
                    itemno: 'C1459',
                    itemname: '其他罐头食品制造'
                  }
                ]
              },
              {
                itemno: 'C146',
                itemname: '调味品、发酵制品制造',
                children: [
                  {
                    itemno: 'C1461',
                    itemname: '味精制造'
                  },
                  {
                    itemno: 'C1462',
                    itemname: '酱油、食醋及类似制品制造'
                  },
                  {
                    itemno: 'C1469',
                    itemname: '其他调味品、发酵制品制造'
                  }
                ]
              },
              {
                itemno: 'C149',
                itemname: '其他食品制造',
                children: [
                  {
                    itemno: 'C1491',
                    itemname: '营养食品制造'
                  },
                  {
                    itemno: 'C1492',
                    itemname: '保健食品制造'
                  },
                  {
                    itemno: 'C1493',
                    itemname: '冷冻饮品及食用冰制造'
                  },
                  {
                    itemno: 'C1494',
                    itemname: '盐加工'
                  },
                  {
                    itemno: 'C1495',
                    itemname: '食品及饲料添加剂制造'
                  },
                  {
                    itemno: 'C1499',
                    itemname: '其他未列明食品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C15',
            itemname: '酒、饮料和精制茶制造业',
            children: [
              {
                itemno: 'C151',
                itemname: '酒的制造',
                children: [
                  {
                    itemno: 'C1511',
                    itemname: '酒精制造'
                  },
                  {
                    itemno: 'C1512',
                    itemname: '白酒制造'
                  },
                  {
                    itemno: 'C1513',
                    itemname: '啤酒制造'
                  },
                  {
                    itemno: 'C1514',
                    itemname: '黄酒制造'
                  },
                  {
                    itemno: 'C1515',
                    itemname: '葡萄酒制造'
                  },
                  {
                    itemno: 'C1519',
                    itemname: '其他酒制造'
                  }
                ]
              },
              {
                itemno: 'C152',
                itemname: '饮料制造',
                children: [
                  {
                    itemno: 'C1521',
                    itemname: '碳酸饮料制造'
                  },
                  {
                    itemno: 'C1522',
                    itemname: '瓶（罐）装饮用水制造'
                  },
                  {
                    itemno: 'C1523',
                    itemname: '果菜汁及果菜汁饮料制造'
                  },
                  {
                    itemno: 'C1524',
                    itemname: '含乳饮料和植物蛋白饮料制造'
                  },
                  {
                    itemno: 'C1525',
                    itemname: '固体饮料制造'
                  },
                  {
                    itemno: 'C1529',
                    itemname: '茶饮料及其他饮料制造'
                  }
                ]
              },
              {
                itemno: 'C153',
                itemname: '精制茶加工',
                children: [
                  {
                    itemno: 'C1530',
                    itemname: '精制茶加工'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C16',
            itemname: '烟草制品业',
            children: [
              {
                itemno: 'C161',
                itemname: '烟叶复烤',
                children: [
                  {
                    itemno: 'C1610',
                    itemname: '烟叶复烤'
                  }
                ]
              },
              {
                itemno: 'C162',
                itemname: '卷烟制造',
                children: [
                  {
                    itemno: 'C1620',
                    itemname: '卷烟制造'
                  }
                ]
              },
              {
                itemno: 'C169',
                itemname: '其他烟草制品制造',
                children: [
                  {
                    itemno: 'C1690',
                    itemname: '其他烟草制品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C17',
            itemname: '纺织业',
            children: [
              {
                itemno: 'C171',
                itemname: '棉纺织及印染精加工',
                children: [
                  {
                    itemno: 'C1711',
                    itemname: '棉纺纱加工'
                  },
                  {
                    itemno: 'C1712',
                    itemname: '棉织造加工'
                  },
                  {
                    itemno: 'C1713',
                    itemname: '棉印染精加工'
                  }
                ]
              },
              {
                itemno: 'C172',
                itemname: '毛纺织及染整精加工',
                children: [
                  {
                    itemno: 'C1721',
                    itemname: '毛条和毛纱线加工'
                  },
                  {
                    itemno: 'C1722',
                    itemname: '毛织造加工'
                  },
                  {
                    itemno: 'C1723',
                    itemname: '毛染整精加工'
                  }
                ]
              },
              {
                itemno: 'C173',
                itemname: '麻纺织及染整精加工',
                children: [
                  {
                    itemno: 'C1731',
                    itemname: '麻纤维纺前加工和纺纱'
                  },
                  {
                    itemno: 'C1732',
                    itemname: '麻织造加工'
                  },
                  {
                    itemno: 'C1733',
                    itemname: '麻染整精加工'
                  }
                ]
              },
              {
                itemno: 'C174',
                itemname: '丝绢纺织及印染精加工',
                children: [
                  {
                    itemno: 'C1741',
                    itemname: '缫丝加工'
                  },
                  {
                    itemno: 'C1742',
                    itemname: '绢纺和丝织加工'
                  },
                  {
                    itemno: 'C1743',
                    itemname: '丝印染精加工'
                  }
                ]
              },
              {
                itemno: 'C175',
                itemname: '化纤织造及印染精加工',
                children: [
                  {
                    itemno: 'C1751',
                    itemname: '化纤织造加工'
                  },
                  {
                    itemno: 'C1752',
                    itemname: '化纤织物染整精加工'
                  }
                ]
              },
              {
                itemno: 'C176',
                itemname: '针织或钩针编织物及其制品制造',
                children: [
                  {
                    itemno: 'C1761',
                    itemname: '针织或钩针编织物织造'
                  },
                  {
                    itemno: 'C1762',
                    itemname: '针织或钩针编织物印染精加工'
                  },
                  {
                    itemno: 'C1763',
                    itemname: '针织或钩针编织品制造'
                  }
                ]
              },
              {
                itemno: 'C177',
                itemname: '家用纺织制成品制造',
                children: [
                  {
                    itemno: 'C1771',
                    itemname: '床上用品制造'
                  },
                  {
                    itemno: 'C1772',
                    itemname: '毛巾类制品制造'
                  },
                  {
                    itemno: 'C1773',
                    itemname: '窗帘、布艺类产品制造'
                  },
                  {
                    itemno: 'C1779',
                    itemname: '其他家用纺织制成品制造'
                  }
                ]
              },
              {
                itemno: 'C178',
                itemname: '产业用纺织制成品制造',
                children: [
                  {
                    itemno: 'C1781',
                    itemname: '非织造布制造'
                  },
                  {
                    itemno: 'C1782',
                    itemname: '绳、索、缆制造'
                  },
                  {
                    itemno: 'C1783',
                    itemname: '纺织带和帘子布制造'
                  },
                  {
                    itemno: 'C1784',
                    itemname: '篷、帆布制造'
                  },
                  {
                    itemno: 'C1789',
                    itemname: '其他产业用纺织制成品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C18',
            itemname: '纺织服装、服饰业',
            children: [
              {
                itemno: 'C181',
                itemname: '机织服装制造',
                children: [
                  {
                    itemno: 'C1811',
                    itemname: '运动机织服装制造'
                  },
                  {
                    itemno: 'C1819',
                    itemname: '其他机织服装制造'
                  }
                ]
              },
              {
                itemno: 'C182',
                itemname: '针织或钩针编织服装制造',
                children: [
                  {
                    itemno: 'C1821',
                    itemname: '运动休闲针织服装制造'
                  },
                  {
                    itemno: 'C1829',
                    itemname: '其他针织或钩针编织服装制造'
                  }
                ]
              },
              {
                itemno: 'C183',
                itemname: '服饰制造',
                children: [
                  {
                    itemno: 'C1830',
                    itemname: '服饰制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C19',
            itemname: '皮革、毛皮、羽毛及其制品和制鞋业',
            children: [
              {
                itemno: 'C191',
                itemname: '皮革鞣制加工',
                children: [
                  {
                    itemno: 'C1910',
                    itemname: '皮革鞣制加工'
                  }
                ]
              },
              {
                itemno: 'C192',
                itemname: '皮革制品制造',
                children: [
                  {
                    itemno: 'C1921',
                    itemname: '皮革服装制造'
                  },
                  {
                    itemno: 'C1922',
                    itemname: '皮箱、包(袋)制造'
                  },
                  {
                    itemno: 'C1923',
                    itemname: '皮手套及皮装饰制品制造'
                  },
                  {
                    itemno: 'C1929',
                    itemname: '其他皮革制品制造'
                  }
                ]
              },
              {
                itemno: 'C193',
                itemname: '毛皮鞣制及制品加工',
                children: [
                  {
                    itemno: 'C1931',
                    itemname: '毛皮鞣制加工'
                  },
                  {
                    itemno: 'C1932',
                    itemname: '毛皮服装加工'
                  },
                  {
                    itemno: 'C1939',
                    itemname: '其他毛皮制品加工'
                  }
                ]
              },
              {
                itemno: 'C194',
                itemname: '羽毛(绒)加工及制品制造',
                children: [
                  {
                    itemno: 'C1941',
                    itemname: '羽毛(绒)加工'
                  },
                  {
                    itemno: 'C1942',
                    itemname: '羽毛(绒)制品加工'
                  }
                ]
              },
              {
                itemno: 'C195',
                itemname: '制鞋业',
                children: [
                  {
                    itemno: 'C1951',
                    itemname: '纺织面料鞋制造'
                  },
                  {
                    itemno: 'C1952',
                    itemname: '皮鞋制造'
                  },
                  {
                    itemno: 'C1953',
                    itemname: '塑料鞋制造'
                  },
                  {
                    itemno: 'C1954',
                    itemname: '橡胶鞋制造'
                  },
                  {
                    itemno: 'C1959',
                    itemname: '其他制鞋业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C20',
            itemname: '木材加工和木、竹、藤、棕、草制品业',
            children: [
              {
                itemno: 'C201',
                itemname: '木材加工',
                children: [
                  {
                    itemno: 'C2011',
                    itemname: '锯材加工'
                  },
                  {
                    itemno: 'C2012',
                    itemname: '木片加工'
                  },
                  {
                    itemno: 'C2013',
                    itemname: '单板加工'
                  },
                  {
                    itemno: 'C2019',
                    itemname: '其他木材加工'
                  }
                ]
              },
              {
                itemno: 'C202',
                itemname: '人造板制造',
                children: [
                  {
                    itemno: 'C2021',
                    itemname: '胶合板制造'
                  },
                  {
                    itemno: 'C2022',
                    itemname: '纤维板制造'
                  },
                  {
                    itemno: 'C2023',
                    itemname: '刨花板制造'
                  },
                  {
                    itemno: 'C2029',
                    itemname: '其他人造板制造'
                  }
                ]
              },
              {
                itemno: 'C203',
                itemname: '木制品制造',
                children: [
                  {
                    itemno: 'C2031',
                    itemname: '建筑用木料及木材组件加工'
                  },
                  {
                    itemno: 'C2032',
                    itemname: '木门窗制造'
                  },
                  {
                    itemno: 'C2033',
                    itemname: '木楼梯制造'
                  },
                  {
                    itemno: 'C2034',
                    itemname: '木地板制造'
                  },
                  {
                    itemno: 'C2035',
                    itemname: '木制容器制造'
                  },
                  {
                    itemno: 'C2039',
                    itemname: '软木制品及其他木制品制造'
                  }
                ]
              },
              {
                itemno: 'C204',
                itemname: '竹、藤、棕、草制品制造',
                children: [
                  {
                    itemno: 'C2041',
                    itemname: '竹制品制造'
                  },
                  {
                    itemno: 'C2042',
                    itemname: '藤制品制造'
                  },
                  {
                    itemno: 'C2043',
                    itemname: '棕制品制造'
                  },
                  {
                    itemno: 'C2049',
                    itemname: '草及其他制品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C21',
            itemname: '家具制造业',
            children: [
              {
                itemno: 'C211',
                itemname: '木质家具制造',
                children: [
                  {
                    itemno: 'C2110',
                    itemname: '木质家具制造'
                  }
                ]
              },
              {
                itemno: 'C212',
                itemname: '竹、藤家具制造',
                children: [
                  {
                    itemno: 'C2120',
                    itemname: '竹、藤家具制造'
                  }
                ]
              },
              {
                itemno: 'C213',
                itemname: '金属家具制造',
                children: [
                  {
                    itemno: 'C2130',
                    itemname: '金属家具制造'
                  }
                ]
              },
              {
                itemno: 'C214',
                itemname: '塑料家具制造',
                children: [
                  {
                    itemno: 'C2140',
                    itemname: '塑料家具制造'
                  }
                ]
              },
              {
                itemno: 'C219',
                itemname: '其他家具制造',
                children: [
                  {
                    itemno: 'C2190',
                    itemname: '其他家具制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C22',
            itemname: '造纸和纸制品业',
            children: [
              {
                itemno: 'C221',
                itemname: '纸浆制造',
                children: [
                  {
                    itemno: 'C2211',
                    itemname: '木竹浆制造'
                  },
                  {
                    itemno: 'C2212',
                    itemname: '非木竹浆制造'
                  }
                ]
              },
              {
                itemno: 'C222',
                itemname: '造纸',
                children: [
                  {
                    itemno: 'C2221',
                    itemname: '机制纸及纸板制造'
                  },
                  {
                    itemno: 'C2222',
                    itemname: '手工纸制造'
                  },
                  {
                    itemno: 'C2223',
                    itemname: '加工纸制造'
                  }
                ]
              },
              {
                itemno: 'C223',
                itemname: '纸制品制造',
                children: [
                  {
                    itemno: 'C2231',
                    itemname: '纸和纸板容器制造'
                  },
                  {
                    itemno: 'C2239',
                    itemname: '其他纸制品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C23',
            itemname: '印刷和记录媒介复制业',
            children: [
              {
                itemno: 'C231',
                itemname: '印刷',
                children: [
                  {
                    itemno: 'C2311',
                    itemname: '书、报刊印刷'
                  },
                  {
                    itemno: 'C2312',
                    itemname: '本册印制'
                  },
                  {
                    itemno: 'C2319',
                    itemname: '包装装潢及其他印刷'
                  }
                ]
              },
              {
                itemno: 'C232',
                itemname: '装订及印刷相关服务',
                children: [
                  {
                    itemno: 'C2320',
                    itemname: '装订及印刷相关服务'
                  }
                ]
              },
              {
                itemno: 'C233',
                itemname: '记录媒介复制',
                children: [
                  {
                    itemno: 'C2330',
                    itemname: '记录媒介复制'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C24',
            itemname: '文教、工美、体育和娱乐用品制造业',
            children: [
              {
                itemno: 'C241',
                itemname: '文教办公用品制造',
                children: [
                  {
                    itemno: 'C2411',
                    itemname: '文具制造'
                  },
                  {
                    itemno: 'C2412',
                    itemname: '笔的制造'
                  },
                  {
                    itemno: 'C2413',
                    itemname: '教学用模型及教具制造'
                  },
                  {
                    itemno: 'C2414',
                    itemname: '墨水、墨汁制造'
                  },
                  {
                    itemno: 'C2419',
                    itemname: '其他文教办公用品制造'
                  }
                ]
              },
              {
                itemno: 'C242',
                itemname: '乐器制造',
                children: [
                  {
                    itemno: 'C2421',
                    itemname: '中乐器制造'
                  },
                  {
                    itemno: 'C2422',
                    itemname: '西乐器制造'
                  },
                  {
                    itemno: 'C2423',
                    itemname: '电子乐器制造'
                  },
                  {
                    itemno: 'C2429',
                    itemname: '其他乐器及零件制造'
                  }
                ]
              },
              {
                itemno: 'C243',
                itemname: '工艺美术及礼仪用品制造',
                children: [
                  {
                    itemno: 'C2431',
                    itemname: '雕塑工艺品制造'
                  },
                  {
                    itemno: 'C2432',
                    itemname: '金属工艺品制造'
                  },
                  {
                    itemno: 'C2433',
                    itemname: '漆器工艺品制造'
                  },
                  {
                    itemno: 'C2434',
                    itemname: '花画工艺品制造'
                  },
                  {
                    itemno: 'C2435',
                    itemname: '天然植物纤维编织工艺品制造'
                  },
                  {
                    itemno: 'C2436',
                    itemname: '抽纱刺绣工艺品制造'
                  },
                  {
                    itemno: 'C2437',
                    itemname: '地毯、挂毯制造'
                  },
                  {
                    itemno: 'C2438',
                    itemname: '珠宝首饰及有关物品制造'
                  },
                  {
                    itemno: 'C2439',
                    itemname: '其他工艺美术及礼仪用品制造'
                  }
                ]
              },
              {
                itemno: 'C244',
                itemname: '体育用品制造',
                children: [
                  {
                    itemno: 'C2441',
                    itemname: '球类制造'
                  },
                  {
                    itemno: 'C2442',
                    itemname: '专项运动器材及配件制造'
                  },
                  {
                    itemno: 'C2443',
                    itemname: '健身器材制造'
                  },
                  {
                    itemno: 'C2444',
                    itemname: '运动防护用具制造'
                  },
                  {
                    itemno: 'C2449',
                    itemname: '其他体育用品制造'
                  }
                ]
              },
              {
                itemno: 'C245',
                itemname: '玩具制造',
                children: [
                  {
                    itemno: 'C2451',
                    itemname: '电玩具制造'
                  },
                  {
                    itemno: 'C2452',
                    itemname: '塑胶玩具制造'
                  },
                  {
                    itemno: 'C2453',
                    itemname: '金属玩具制造'
                  },
                  {
                    itemno: 'C2454',
                    itemname: '弹射玩具制造'
                  },
                  {
                    itemno: 'C2455',
                    itemname: '娃娃玩具制造'
                  },
                  {
                    itemno: 'C2456',
                    itemname: '儿童乘骑玩耍的童车类产品制造'
                  },
                  {
                    itemno: 'C2459',
                    itemname: '其他玩具制造'
                  }
                ]
              },
              {
                itemno: 'C246',
                itemname: '游艺器材及娱乐用品制造',
                children: [
                  {
                    itemno: 'C2461',
                    itemname: '露天游乐场所游乐设备制造'
                  },
                  {
                    itemno: 'C2462',
                    itemname: '游艺用品及室内游艺器材制造'
                  },
                  {
                    itemno: 'C2469',
                    itemname: '其他娱乐用品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C25',
            itemname: '石油、煤炭及其他燃料加工业',
            children: [
              {
                itemno: 'C251',
                itemname: '精炼石油产品制造',
                children: [
                  {
                    itemno: 'C2511',
                    itemname: '原油加工及石油制品制造'
                  },
                  {
                    itemno: 'C2519',
                    itemname: '其他原油制造'
                  }
                ]
              },
              {
                itemno: 'C252',
                itemname: '煤炭加工',
                children: [
                  {
                    itemno: 'C2521',
                    itemname: '炼焦'
                  },
                  {
                    itemno: 'C2523',
                    itemname: '煤制液体燃料生产'
                  },
                  {
                    itemno: 'C2524',
                    itemname: '煤制品制造'
                  },
                  {
                    itemno: 'C2529',
                    itemname: '其他煤炭加工'
                  }
                ]
              },
              {
                itemno: 'C253',
                itemname: '核燃料加工',
                children: [
                  {
                    itemno: 'C2530',
                    itemname: '核燃料加工'
                  }
                ]
              },
              {
                itemno: 'C254',
                itemname: '生物质燃料加工',
                children: [
                  {
                    itemno: 'C2541',
                    itemname: '生物质液体燃料生产'
                  },
                  {
                    itemno: 'C2542',
                    itemname: '生物质致密成型燃料加工'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C26',
            itemname: '化学原料和化学制品制造业',
            children: [
              {
                itemno: 'C261',
                itemname: '基础化学原料制造',
                children: [
                  {
                    itemno: 'C2611',
                    itemname: '无机酸制造'
                  },
                  {
                    itemno: 'C2612',
                    itemname: '无机碱制造'
                  },
                  {
                    itemno: 'C2613',
                    itemname: '无机盐制造'
                  },
                  {
                    itemno: 'C2614',
                    itemname: '有机化学原料制造'
                  },
                  {
                    itemno: 'C2619',
                    itemname: '其他基础化学原料制造'
                  }
                ]
              },
              {
                itemno: 'C262',
                itemname: '肥料制造',
                children: [
                  {
                    itemno: 'C2621',
                    itemname: '氮肥制造'
                  },
                  {
                    itemno: 'C2622',
                    itemname: '磷肥制造'
                  },
                  {
                    itemno: 'C2623',
                    itemname: '钾肥制造'
                  },
                  {
                    itemno: 'C2624',
                    itemname: '复混肥料制造'
                  },
                  {
                    itemno: 'C2625',
                    itemname: '有机肥料及微生物肥料制造'
                  },
                  {
                    itemno: 'C2629',
                    itemname: '其他肥料制造'
                  }
                ]
              },
              {
                itemno: 'C263',
                itemname: '农药制造',
                children: [
                  {
                    itemno: 'C2631',
                    itemname: '化学农药制造'
                  },
                  {
                    itemno: 'C2632',
                    itemname: '生物化学农药及微生物农药制造'
                  }
                ]
              },
              {
                itemno: 'C264',
                itemname: '涂料、油墨、颜料及类似产品制造',
                children: [
                  {
                    itemno: 'C2641',
                    itemname: '涂料制造'
                  },
                  {
                    itemno: 'C2642',
                    itemname: '油墨及类似产品制造'
                  },
                  {
                    itemno: 'C2643',
                    itemname: '工业颜料制造'
                  },
                  {
                    itemno: 'C2644',
                    itemname: '工艺美术颜料制造'
                  },
                  {
                    itemno: 'C2645',
                    itemname: '染料制造'
                  },
                  {
                    itemno: 'C2646',
                    itemname: '密封用填料及类似品制造'
                  }
                ]
              },
              {
                itemno: 'C265',
                itemname: '合成材料制造',
                children: [
                  {
                    itemno: 'C2651',
                    itemname: '初级形态塑料及合成树脂制造'
                  },
                  {
                    itemno: 'C2652',
                    itemname: '合成橡胶制造'
                  },
                  {
                    itemno: 'C2653',
                    itemname: '合成纤维单(聚合)体制造'
                  },
                  {
                    itemno: 'C2659',
                    itemname: '其他合成材料制造'
                  }
                ]
              },
              {
                itemno: 'C266',
                itemname: '专用化学产品制造',
                children: [
                  {
                    itemno: 'C2661',
                    itemname: '化学试剂和助剂制造'
                  },
                  {
                    itemno: 'C2662',
                    itemname: '专项化学用品制造'
                  },
                  {
                    itemno: 'C2663',
                    itemname: '林产化学产品制造'
                  },
                  {
                    itemno: 'C2664',
                    itemname: '文化用信息化学品制造'
                  },
                  {
                    itemno: 'C2665',
                    itemname: '医学生产用信息化学品制造'
                  },
                  {
                    itemno: 'C2666',
                    itemname: '环境污染处理专用药剂材料制造'
                  },
                  {
                    itemno: 'C2667',
                    itemname: '动物胶制造'
                  },
                  {
                    itemno: 'C2669',
                    itemname: '其他专用化学产品制造'
                  }
                ]
              },
              {
                itemno: 'C267',
                itemname: '炸药、火工及焰火产品制造',
                children: [
                  {
                    itemno: 'C2671',
                    itemname: '炸药及火工产品制造'
                  },
                  {
                    itemno: 'C2672',
                    itemname: '焰火、鞭炮产品制造'
                  }
                ]
              },
              {
                itemno: 'C268',
                itemname: '日用化学产品制造',
                children: [
                  {
                    itemno: 'C2681',
                    itemname: '肥皂及洗涤剂制造'
                  },
                  {
                    itemno: 'C2682',
                    itemname: '化妆品制造'
                  },
                  {
                    itemno: 'C2683',
                    itemname: '口腔清洁用品制造'
                  },
                  {
                    itemno: 'C2684',
                    itemname: '香料、香精制造'
                  },
                  {
                    itemno: 'C2689',
                    itemname: '其他日用化学产品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C27',
            itemname: '医药制造业',
            children: [
              {
                itemno: 'C271',
                itemname: '化学药品原料药制造',
                children: [
                  {
                    itemno: 'C2710',
                    itemname: '化学药品原料药制造'
                  }
                ]
              },
              {
                itemno: 'C272',
                itemname: '化学药品制剂制造',
                children: [
                  {
                    itemno: 'C2720',
                    itemname: '化学药品制剂制造'
                  }
                ]
              },
              {
                itemno: 'C273',
                itemname: '中药饮片加工',
                children: [
                  {
                    itemno: 'C2730',
                    itemname: '中药饮片加工'
                  }
                ]
              },
              {
                itemno: 'C274',
                itemname: '中成药生产',
                children: [
                  {
                    itemno: 'C2740',
                    itemname: '中成药生产'
                  }
                ]
              },
              {
                itemno: 'C275',
                itemname: '兽用药品制造',
                children: [
                  {
                    itemno: 'C2750',
                    itemname: '兽用药品制造'
                  }
                ]
              },
              {
                itemno: 'C276',
                itemname: '生物药品制品制造',
                children: [
                  {
                    itemno: 'C2761',
                    itemname: '生物药品制造'
                  },
                  {
                    itemno: 'C2762',
                    itemname: '基因工程药物和疫苗制造'
                  }
                ]
              },
              {
                itemno: 'C277',
                itemname: '卫生材料及医药用品制造',
                children: [
                  {
                    itemno: 'C2770',
                    itemname: '卫生材料及医药用品制造'
                  }
                ]
              },
              {
                itemno: 'C278',
                itemname: '药用辅料及包装材料',
                children: [
                  {
                    itemno: 'C2780',
                    itemname: '药用辅料及包装材料'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C28',
            itemname: '化学纤维制造业',
            children: [
              {
                itemno: 'C281',
                itemname: '纤维素纤维原料及纤维制造',
                children: [
                  {
                    itemno: 'C2811',
                    itemname: '化纤浆粕制造'
                  },
                  {
                    itemno: 'C2812',
                    itemname: '人造纤维（纤维素纤维）制造'
                  }
                ]
              },
              {
                itemno: 'C282',
                itemname: '合成纤维制造',
                children: [
                  {
                    itemno: 'C2821',
                    itemname: '锦纶纤维制造'
                  },
                  {
                    itemno: 'C2822',
                    itemname: '涤纶纤维制造'
                  },
                  {
                    itemno: 'C2823',
                    itemname: '腈纶纤维制造'
                  },
                  {
                    itemno: 'C2824',
                    itemname: '维纶纤维制造'
                  },
                  {
                    itemno: 'C2825',
                    itemname: '丙纶纤维制造'
                  },
                  {
                    itemno: 'C2826',
                    itemname: '氨纶纤维制造'
                  },
                  {
                    itemno: 'C2829',
                    itemname: '其他合成纤维制造'
                  }
                ]
              },
              {
                itemno: 'C283',
                itemname: '生物基材料制造',
                children: [
                  {
                    itemno: 'C2831',
                    itemname: '生物基化学纤维制造'
                  },
                  {
                    itemno: 'C2832',
                    itemname: '生物基、淀粉基新材料制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C29',
            itemname: '橡胶和塑料制品业',
            children: [
              {
                itemno: 'C291',
                itemname: '橡胶制品业',
                children: [
                  {
                    itemno: 'C2911',
                    itemname: '轮胎制造'
                  },
                  {
                    itemno: 'C2912',
                    itemname: '橡胶板、管、带制造'
                  },
                  {
                    itemno: 'C2913',
                    itemname: '橡胶零件制造'
                  },
                  {
                    itemno: 'C2914',
                    itemname: '再生橡胶制造'
                  },
                  {
                    itemno: 'C2915',
                    itemname: '日用及医用橡胶制品制造'
                  },
                  {
                    itemno: 'C2916',
                    itemname: '运动场地用塑胶制造'
                  },
                  {
                    itemno: 'C2919',
                    itemname: '其他橡胶制品制造'
                  }
                ]
              },
              {
                itemno: 'C292',
                itemname: '塑料制品业',
                children: [
                  {
                    itemno: 'C2921',
                    itemname: '塑料薄膜制造'
                  },
                  {
                    itemno: 'C2922',
                    itemname: '塑料板、管、型材制造'
                  },
                  {
                    itemno: 'C2923',
                    itemname: '塑料丝、绳及编织品制造'
                  },
                  {
                    itemno: 'C2924',
                    itemname: '泡沫塑料制造'
                  },
                  {
                    itemno: 'C2925',
                    itemname: '塑料人造革、合成革制造'
                  },
                  {
                    itemno: 'C2926',
                    itemname: '塑料包装箱及容器制造'
                  },
                  {
                    itemno: 'C2927',
                    itemname: '日用塑料制品制造'
                  },
                  {
                    itemno: 'C2928',
                    itemname: '人造草坪制造'
                  },
                  {
                    itemno: 'C2929',
                    itemname: '塑料零件及其他塑料制品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C30',
            itemname: '非金属矿物制品业',
            children: [
              {
                itemno: 'C301',
                itemname: '水泥、石灰和石膏制造',
                children: [
                  {
                    itemno: 'C3011',
                    itemname: '水泥制造'
                  },
                  {
                    itemno: 'C3012',
                    itemname: '石灰和石膏制造'
                  }
                ]
              },
              {
                itemno: 'C302',
                itemname: '石膏、水泥制品及类似制品制造',
                children: [
                  {
                    itemno: 'C3021',
                    itemname: '水泥制品制造'
                  },
                  {
                    itemno: 'C3022',
                    itemname: '砼结构构件制造'
                  },
                  {
                    itemno: 'C3023',
                    itemname: '石棉水泥制品制造'
                  },
                  {
                    itemno: 'C3024',
                    itemname: '轻质建筑材料制造'
                  },
                  {
                    itemno: 'C3029',
                    itemname: '其他水泥类似制品制造'
                  }
                ]
              },
              {
                itemno: 'C303',
                itemname: '砖瓦、石材等建筑材料制造',
                children: [
                  {
                    itemno: 'C3031',
                    itemname: '粘土砖瓦及建筑砌块制造'
                  },
                  {
                    itemno: 'C3032',
                    itemname: '建筑用石加工'
                  },
                  {
                    itemno: 'C3033',
                    itemname: '防水建筑材料制造'
                  },
                  {
                    itemno: 'C3034',
                    itemname: '隔热和隔音材料制造'
                  },
                  {
                    itemno: 'C3039',
                    itemname: '其他建筑材料制造'
                  }
                ]
              },
              {
                itemno: 'C304',
                itemname: '玻璃制造',
                children: [
                  {
                    itemno: 'C3041',
                    itemname: '平板玻璃制造'
                  },
                  {
                    itemno: 'C3042',
                    itemname: '特种玻璃制造'
                  },
                  {
                    itemno: 'C3049',
                    itemname: '其他玻璃制造'
                  }
                ]
              },
              {
                itemno: 'C305',
                itemname: '玻璃制品制造',
                children: [
                  {
                    itemno: 'C3051',
                    itemname: '技术玻璃制品制造'
                  },
                  {
                    itemno: 'C3052',
                    itemname: '光学玻璃制造'
                  },
                  {
                    itemno: 'C3053',
                    itemname: '玻璃仪器制造'
                  },
                  {
                    itemno: 'C3054',
                    itemname: '日用玻璃制品制造'
                  },
                  {
                    itemno: 'C3055',
                    itemname: '玻璃包装容器制造'
                  },
                  {
                    itemno: 'C3056',
                    itemname: '玻璃保温容器制造'
                  },
                  {
                    itemno: 'C3057',
                    itemname: '制镜及类似品加工'
                  },
                  {
                    itemno: 'C3059',
                    itemname: '其他玻璃制品制造'
                  }
                ]
              },
              {
                itemno: 'C306',
                itemname: '玻璃纤维和玻璃纤维增强塑料制品制造',
                children: [
                  {
                    itemno: 'C3061',
                    itemname: '玻璃纤维及制品制造'
                  },
                  {
                    itemno: 'C3062',
                    itemname: '玻璃纤维增强塑料制品制造'
                  }
                ]
              },
              {
                itemno: 'C307',
                itemname: '陶瓷制品制造',
                children: [
                  {
                    itemno: 'C3071',
                    itemname: '建筑陶瓷制品制造'
                  },
                  {
                    itemno: 'C3072',
                    itemname: '卫生陶瓷制品制造'
                  },
                  {
                    itemno: 'C3073',
                    itemname: '特种陶瓷制品制造'
                  },
                  {
                    itemno: 'C3074',
                    itemname: '日用陶瓷制品制造'
                  },
                  {
                    itemno: 'C3075',
                    itemname: '陈设艺术陶瓷制造'
                  },
                  {
                    itemno: 'C3076',
                    itemname: '园艺陶瓷制造'
                  },
                  {
                    itemno: 'C3079',
                    itemname: '其他陶瓷制品制造'
                  }
                ]
              },
              {
                itemno: 'C308',
                itemname: '耐火材料制品制造',
                children: [
                  {
                    itemno: 'C3081',
                    itemname: '石棉制品制造'
                  },
                  {
                    itemno: 'C3082',
                    itemname: '云母制品制造'
                  },
                  {
                    itemno: 'C3089',
                    itemname: '耐火陶瓷制品及其他耐火材料制造'
                  }
                ]
              },
              {
                itemno: 'C309',
                itemname: '石墨及其他非金属矿物制品制造',
                children: [
                  {
                    itemno: 'C3091',
                    itemname: '石墨及碳素制品制造'
                  },
                  {
                    itemno: 'C3099',
                    itemname: '其他非金属矿物制品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C31',
            itemname: '黑色金属冶炼和压延加工业',
            children: [
              {
                itemno: 'C311',
                itemname: '炼铁',
                children: [
                  {
                    itemno: 'C3110',
                    itemname: '炼铁'
                  }
                ]
              },
              {
                itemno: 'C312',
                itemname: '炼钢',
                children: [
                  {
                    itemno: 'C3120',
                    itemname: '炼钢'
                  }
                ]
              },
              {
                itemno: 'C313',
                itemname: '钢压延加工',
                children: [
                  {
                    itemno: 'C3130',
                    itemname: '钢压延加工'
                  }
                ]
              },
              {
                itemno: 'C314',
                itemname: '铁合金冶炼',
                children: [
                  {
                    itemno: 'C3140',
                    itemname: '铁合金冶炼'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C32',
            itemname: '有色金属冶炼和压延加工业',
            children: [
              {
                itemno: 'C321',
                itemname: '常用有色金属冶炼',
                children: [
                  {
                    itemno: 'C3211',
                    itemname: '铜冶炼'
                  },
                  {
                    itemno: 'C3212',
                    itemname: '铅锌冶炼'
                  },
                  {
                    itemno: 'C3213',
                    itemname: '镍钴冶炼'
                  },
                  {
                    itemno: 'C3214',
                    itemname: '锡冶炼'
                  },
                  {
                    itemno: 'C3215',
                    itemname: '锑冶炼'
                  },
                  {
                    itemno: 'C3216',
                    itemname: '铝冶炼'
                  },
                  {
                    itemno: 'C3217',
                    itemname: '镁冶炼'
                  },
                  {
                    itemno: 'C3218',
                    itemname: '硅冶炼'
                  },
                  {
                    itemno: 'C3219',
                    itemname: '其他常用有色金属冶炼'
                  }
                ]
              },
              {
                itemno: 'C322',
                itemname: '贵金属冶炼',
                children: [
                  {
                    itemno: 'C3221',
                    itemname: '金冶炼'
                  },
                  {
                    itemno: 'C3222',
                    itemname: '银冶炼'
                  },
                  {
                    itemno: 'C3229',
                    itemname: '其他贵金属冶炼'
                  }
                ]
              },
              {
                itemno: 'C323',
                itemname: '稀有稀土金属冶炼',
                children: [
                  {
                    itemno: 'C3231',
                    itemname: '钨钼冶炼'
                  },
                  {
                    itemno: 'C3232',
                    itemname: '稀土金属冶炼'
                  },
                  {
                    itemno: 'C3239',
                    itemname: '其他稀有金属冶炼'
                  }
                ]
              },
              {
                itemno: 'C324',
                itemname: '有色金属合金制造',
                children: [
                  {
                    itemno: 'C3240',
                    itemname: '有色金属合金制造'
                  }
                ]
              },
              {
                itemno: 'C325',
                itemname: '有色金属压延加工',
                children: [
                  {
                    itemno: 'C3251',
                    itemname: '铜压延加工'
                  },
                  {
                    itemno: 'C3252',
                    itemname: '铝压延加工'
                  },
                  {
                    itemno: 'C3253',
                    itemname: '贵金属压延加工'
                  },
                  {
                    itemno: 'C3254',
                    itemname: '稀有稀土金属压延加工'
                  },
                  {
                    itemno: 'C3259',
                    itemname: '其他有色金属压延加工'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C33',
            itemname: '金属制品业',
            children: [
              {
                itemno: 'C331',
                itemname: '结构性金属制品制造',
                children: [
                  {
                    itemno: 'C3311',
                    itemname: '金属结构制造'
                  },
                  {
                    itemno: 'C3312',
                    itemname: '金属门窗制造'
                  }
                ]
              },
              {
                itemno: 'C332',
                itemname: '金属工具制造',
                children: [
                  {
                    itemno: 'C3321',
                    itemname: '切削工具制造'
                  },
                  {
                    itemno: 'C3322',
                    itemname: '手工具制造'
                  },
                  {
                    itemno: 'C3323',
                    itemname: '农用及园林用金属工具制造'
                  },
                  {
                    itemno: 'C3324',
                    itemname: '刀剪及类似日用金属工具制造'
                  },
                  {
                    itemno: 'C3329',
                    itemname: '其他金属工具制造'
                  }
                ]
              },
              {
                itemno: 'C333',
                itemname: '集装箱及金属包装容器制造',
                children: [
                  {
                    itemno: 'C3331',
                    itemname: '集装箱制造'
                  },
                  {
                    itemno: 'C3332',
                    itemname: '金属压力容器制造'
                  },
                  {
                    itemno: 'C3333',
                    itemname: '金属包装容器及材料制造'
                  }
                ]
              },
              {
                itemno: 'C334',
                itemname: '金属丝绳及其制品制造',
                children: [
                  {
                    itemno: 'C3340',
                    itemname: '金属丝绳及其制品制造'
                  }
                ]
              },
              {
                itemno: 'C335',
                itemname: '建筑、安全用金属制品制造',
                children: [
                  {
                    itemno: 'C3351',
                    itemname: '建筑、家具用金属配件制造'
                  },
                  {
                    itemno: 'C3352',
                    itemname: '建筑装饰及水暖管道零件制造'
                  },
                  {
                    itemno: 'C3353',
                    itemname: '安全、消防用金属制品制造'
                  },
                  {
                    itemno: 'C3359',
                    itemname: '其他建筑、安全用金属制品制造'
                  }
                ]
              },
              {
                itemno: 'C336',
                itemname: '金属表面处理及热处理加工',
                children: [
                  {
                    itemno: 'C3360',
                    itemname: '金属表面处理及热处理加工'
                  }
                ]
              },
              {
                itemno: 'C337',
                itemname: '搪瓷制品制造',
                children: [
                  {
                    itemno: 'C3371',
                    itemname: '生产专用搪瓷制品制造'
                  },
                  {
                    itemno: 'C3372',
                    itemname: '建筑装饰搪瓷制品制造'
                  },
                  {
                    itemno: 'C3373',
                    itemname: '搪瓷卫生洁具制造'
                  },
                  {
                    itemno: 'C3379',
                    itemname: '搪瓷日用品及其他搪瓷制品制造'
                  }
                ]
              },
              {
                itemno: 'C338',
                itemname: '金属制日用品制造',
                children: [
                  {
                    itemno: 'C3381',
                    itemname: '金属制厨房用器具制造'
                  },
                  {
                    itemno: 'C3382',
                    itemname: '金属制餐具和器皿制造'
                  },
                  {
                    itemno: 'C3383',
                    itemname: '金属制卫生器具制造'
                  },
                  {
                    itemno: 'C3389',
                    itemname: '其他金属制日用品制造'
                  }
                ]
              },
              {
                itemno: 'C339',
                itemname: '锻造及其他金属制品制造',
                children: [
                  {
                    itemno: 'C3391',
                    itemname: '黑色金属铸造'
                  },
                  {
                    itemno: 'C3392',
                    itemname: '有色金属铸造'
                  },
                  {
                    itemno: 'C3393',
                    itemname: '锻件及粉末冶金制品制造'
                  },
                  {
                    itemno: 'C3394',
                    itemname: '交通及公共管理用金属标牌制造'
                  },
                  {
                    itemno: 'C3399',
                    itemname: '其他未列明金属制品制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C34',
            itemname: '通用设备制造业',
            children: [
              {
                itemno: 'C341',
                itemname: '锅炉及原动设备制造',
                children: [
                  {
                    itemno: 'C3411',
                    itemname: '锅炉及辅助设备制造'
                  },
                  {
                    itemno: 'C3412',
                    itemname: '内燃机及配件制造'
                  },
                  {
                    itemno: 'C3413',
                    itemname: '汽轮机及辅机制造'
                  },
                  {
                    itemno: 'C3414',
                    itemname: '水轮机及辅机制造'
                  },
                  {
                    itemno: 'C3415',
                    itemname: '风能原动设备制造'
                  },
                  {
                    itemno: 'C3419',
                    itemname: '其他原动设备制造'
                  }
                ]
              },
              {
                itemno: 'C342',
                itemname: '金属加工机械制造',
                children: [
                  {
                    itemno: 'C3421',
                    itemname: '金属切削机床制造'
                  },
                  {
                    itemno: 'C3422',
                    itemname: '金属成形机床制造'
                  },
                  {
                    itemno: 'C3423',
                    itemname: '铸造机械制造'
                  },
                  {
                    itemno: 'C3424',
                    itemname: '金属切割及焊接设备制造'
                  },
                  {
                    itemno: 'C3425',
                    itemname: '机床功能部件及附件制造'
                  },
                  {
                    itemno: 'C3429',
                    itemname: '其他金属加工机械制造'
                  }
                ]
              },
              {
                itemno: 'C343',
                itemname: '物料搬运设备制造',
                children: [
                  {
                    itemno: 'C3431',
                    itemname: '轻小型起重设备制造'
                  },
                  {
                    itemno: 'C3432',
                    itemname: '生产专用起重机制造'
                  },
                  {
                    itemno: 'C3433',
                    itemname: '生产专用车辆制造'
                  },
                  {
                    itemno: 'C3434',
                    itemname: '连续搬运设备制造'
                  },
                  {
                    itemno: 'C3435',
                    itemname: '电梯、自动扶梯及升降机制造'
                  },
                  {
                    itemno: 'C3436',
                    itemname: '客运索道制造'
                  },
                  {
                    itemno: 'C3437',
                    itemname: '机械式停车设备制造'
                  },
                  {
                    itemno: 'C3439',
                    itemname: '其他物料搬运设备制造'
                  }
                ]
              },
              {
                itemno: 'C344',
                itemname: '泵、阀门、压缩机及类似机械制造',
                children: [
                  {
                    itemno: 'C3441',
                    itemname: '泵及真空设备制造'
                  },
                  {
                    itemno: 'C3442',
                    itemname: '气体压缩机械制造'
                  },
                  {
                    itemno: 'C3443',
                    itemname: '阀门和旋塞制造'
                  },
                  {
                    itemno: 'C3444',
                    itemname: '液压动力机械及元件制造'
                  },
                  {
                    itemno: 'C3445',
                    itemname: '液力动力机械元件制造'
                  },
                  {
                    itemno: 'C3446',
                    itemname: '气压动力机械及元件制造'
                  }
                ]
              },
              {
                itemno: 'C345',
                itemname: '轴承、齿轮和传动部件制造',
                children: [
                  {
                    itemno: 'C3451',
                    itemname: '滚动轴承制造'
                  },
                  {
                    itemno: 'C3452',
                    itemname: '滑动轴承制造'
                  },
                  {
                    itemno: 'C3453',
                    itemname: '齿轮及齿轮减、变速箱制造'
                  },
                  {
                    itemno: 'C3459',
                    itemname: '其他传动部件制造'
                  }
                ]
              },
              {
                itemno: 'C346',
                itemname: '烘炉、风机、包装等设备制造',
                children: [
                  {
                    itemno: 'C3461',
                    itemname: '烘炉、熔炉及电炉制造'
                  },
                  {
                    itemno: 'C3462',
                    itemname: '风机、风扇制造'
                  },
                  {
                    itemno: 'C3463',
                    itemname: '气体、液体分离及纯净设备制造'
                  },
                  {
                    itemno: 'C3464',
                    itemname: '制冷、空调设备制造'
                  },
                  {
                    itemno: 'C3465',
                    itemname: '风动和电动工具制造'
                  },
                  {
                    itemno: 'C3466',
                    itemname: '喷枪及类似器具制造'
                  },
                  {
                    itemno: 'C3467',
                    itemname: '包装专用设备制造'
                  }
                ]
              },
              {
                itemno: 'C347',
                itemname: '文化、办公用机械制造',
                children: [
                  {
                    itemno: 'C3471',
                    itemname: '电影机械制造'
                  },
                  {
                    itemno: 'C3472',
                    itemname: '幻灯及投影设备制造'
                  },
                  {
                    itemno: 'C3473',
                    itemname: '照相机及器材制造'
                  },
                  {
                    itemno: 'C3474',
                    itemname: '复印和胶印设备制造'
                  },
                  {
                    itemno: 'C3475',
                    itemname: '计算器及货币专用设备制造'
                  },
                  {
                    itemno: 'C3479',
                    itemname: '其他文化、办公用机械制造'
                  }
                ]
              },
              {
                itemno: 'C348',
                itemname: '通用零部件制造',
                children: [
                  {
                    itemno: 'C3481',
                    itemname: '金属密封件制造'
                  },
                  {
                    itemno: 'C3482',
                    itemname: '紧固件制造'
                  },
                  {
                    itemno: 'C3483',
                    itemname: '弹簧制造'
                  },
                  {
                    itemno: 'C3484',
                    itemname: '机械零部件加工'
                  },
                  {
                    itemno: 'C3489',
                    itemname: '其他通用零部件制造'
                  }
                ]
              },
              {
                itemno: 'C349',
                itemname: '其他通用设备制造',
                children: [
                  {
                    itemno: 'C3491',
                    itemname: '工业机器人制造'
                  },
                  {
                    itemno: 'C3492',
                    itemname: '特殊作业机器人制造'
                  },
                  {
                    itemno: 'C3493',
                    itemname: '增材制造装备制造'
                  },
                  {
                    itemno: 'C3499',
                    itemname: '其他未列明通用设备制造业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C35',
            itemname: '专用设备制造业',
            children: [
              {
                itemno: 'C351',
                itemname: '采矿、冶金、建筑专用设备制造',
                children: [
                  {
                    itemno: 'C3511',
                    itemname: '矿山机械制造'
                  },
                  {
                    itemno: 'C3512',
                    itemname: '石油钻采专用设备制造'
                  },
                  {
                    itemno: 'C3513',
                    itemname: '深海石油钻探设备制造'
                  },
                  {
                    itemno: 'C3514',
                    itemname: '建筑工程用机械制造'
                  },
                  {
                    itemno: 'C3515',
                    itemname: '建筑材料生产专用机械制造'
                  },
                  {
                    itemno: 'C3516',
                    itemname: '冶金专用设备制造'
                  },
                  {
                    itemno: 'C3517',
                    itemname: '隧道施工专用机械制造'
                  }
                ]
              },
              {
                itemno: 'C352',
                itemname: '化工、木材、非金属加工专用设备制造',
                children: [
                  {
                    itemno: 'C3521',
                    itemname: '炼油、化工生产专用设备制造'
                  },
                  {
                    itemno: 'C3522',
                    itemname: '橡胶加工专用设备制造'
                  },
                  {
                    itemno: 'C3523',
                    itemname: '塑料加工专用设备制造'
                  },
                  {
                    itemno: 'C3524',
                    itemname: '木竹材加工机械制造'
                  },
                  {
                    itemno: 'C3525',
                    itemname: '模具制造'
                  },
                  {
                    itemno: 'C3529',
                    itemname: '其他非金属加工专用设备制造'
                  }
                ]
              },
              {
                itemno: 'C353',
                itemname: '食品、饮料、烟草及饲料生产专用设备制造',
                children: [
                  {
                    itemno: 'C3531',
                    itemname: '食品、酒、饮料及茶生产专用设备制造'
                  },
                  {
                    itemno: 'C3532',
                    itemname: '农副食品加工专用设备制造'
                  },
                  {
                    itemno: 'C3533',
                    itemname: '烟草生产专用设备制造'
                  },
                  {
                    itemno: 'C3534',
                    itemname: '饲料生产专用设备制造'
                  }
                ]
              },
              {
                itemno: 'C354',
                itemname: '印刷、制药、日化及日用品生产专用设备制造',
                children: [
                  {
                    itemno: 'C3541',
                    itemname: '制浆和造纸专用设备制造'
                  },
                  {
                    itemno: 'C3542',
                    itemname: '印刷专用设备制造'
                  },
                  {
                    itemno: 'C3543',
                    itemname: '日用化工专用设备制造'
                  },
                  {
                    itemno: 'C3544',
                    itemname: '制药专用设备制造'
                  },
                  {
                    itemno: 'C3545',
                    itemname: '照明器具生产专用设备制造'
                  },
                  {
                    itemno: 'C3546',
                    itemname: '玻璃、陶瓷和搪瓷制品生产专用设备制造'
                  },
                  {
                    itemno: 'C3549',
                    itemname: '其他日用品生产专用设备制造'
                  }
                ]
              },
              {
                itemno: 'C355',
                itemname: '纺织、服装和皮革加工专用设备制造',
                children: [
                  {
                    itemno: 'C3551',
                    itemname: '纺织专用设备制造'
                  },
                  {
                    itemno: 'C3552',
                    itemname: '皮革、毛皮及其制品加工专用设备制造'
                  },
                  {
                    itemno: 'C3553',
                    itemname: '缝制机械制造'
                  },
                  {
                    itemno: 'C3554',
                    itemname: '洗涤机械制造'
                  }
                ]
              },
              {
                itemno: 'C356',
                itemname: '电子和电工机械专用设备制造',
                children: [
                  {
                    itemno: 'C3561',
                    itemname: '电工机械专用设备制造'
                  },
                  {
                    itemno: 'C3562',
                    itemname: '半导体器件专用设备制造'
                  },
                  {
                    itemno: 'C3563',
                    itemname: '电子元器件与机电组件设备制造'
                  },
                  {
                    itemno: 'C3569',
                    itemname: '其他电子专用设备制造'
                  }
                ]
              },
              {
                itemno: 'C357',
                itemname: '农、林、牧、渔专用机械制造',
                children: [
                  {
                    itemno: 'C3571',
                    itemname: '拖拉机制造'
                  },
                  {
                    itemno: 'C3572',
                    itemname: '机械化农业及园艺机具制造'
                  },
                  {
                    itemno: 'C3573',
                    itemname: '营林及木竹采伐机械制造'
                  },
                  {
                    itemno: 'C3574',
                    itemname: '畜牧机械制造'
                  },
                  {
                    itemno: 'C3575',
                    itemname: '渔业机械制造'
                  },
                  {
                    itemno: 'C3576',
                    itemname: '农林牧渔机械配件制造'
                  },
                  {
                    itemno: 'C3577',
                    itemname: '棉花加工机械制造'
                  },
                  {
                    itemno: 'C3579',
                    itemname: '其他农、林、牧、渔业机械制造'
                  }
                ]
              },
              {
                itemno: 'C358',
                itemname: '医疗仪器设备及器械制造',
                children: [
                  {
                    itemno: 'C3581',
                    itemname: '医疗诊断、监护及治疗设备制造'
                  },
                  {
                    itemno: 'C3582',
                    itemname: '口腔科用设备及器具制造'
                  },
                  {
                    itemno: 'C3583',
                    itemname: '医疗实验室及医用消毒设备和器具制造'
                  },
                  {
                    itemno: 'C3584',
                    itemname: '医疗、外科及兽医用器械制造'
                  },
                  {
                    itemno: 'C3585',
                    itemname: '机械治疗及病房护理设备制造'
                  },
                  {
                    itemno: 'C3586',
                    itemname: '康复辅具制造'
                  },
                  {
                    itemno: 'C3587',
                    itemname: '眼镜制造'
                  },
                  {
                    itemno: 'C3589',
                    itemname: '其他医疗设备及器械制造'
                  }
                ]
              },
              {
                itemno: 'C359',
                itemname: '环保、邮政、社会公共服务及其他专用设备制造',
                children: [
                  {
                    itemno: 'C3591',
                    itemname: '环境保护专用设备制造'
                  },
                  {
                    itemno: 'C3592',
                    itemname: '地质勘查专用设备制造'
                  },
                  {
                    itemno: 'C3593',
                    itemname: '邮政专用机械及器材制造'
                  },
                  {
                    itemno: 'C3594',
                    itemname: '商业、饮食、服务专用设备制造'
                  },
                  {
                    itemno: 'C3595',
                    itemname: '社会公共安全设备及器材制造'
                  },
                  {
                    itemno: 'C3596',
                    itemname: '交通安全、管制及类似专用设备制造'
                  },
                  {
                    itemno: 'C3597',
                    itemname: '水资源专用机械制造'
                  },
                  {
                    itemno: 'C3599',
                    itemname: '其他专用设备制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C36',
            itemname: '汽车制造业',
            children: [
              {
                itemno: 'C361',
                itemname: '汽车整车制造',
                children: [
                  {
                    itemno: 'C3611',
                    itemname: '汽柴油车整车制造'
                  },
                  {
                    itemno: 'C3612',
                    itemname: '新能源车整车制造'
                  }
                ]
              },
              {
                itemno: 'C362',
                itemname: '汽车用发动机制造',
                children: [
                  {
                    itemno: 'C3620',
                    itemname: '汽车用发动机制造'
                  }
                ]
              },
              {
                itemno: 'C363',
                itemname: '改装汽车制造',
                children: [
                  {
                    itemno: 'C3630',
                    itemname: '改装汽车制造'
                  }
                ]
              },
              {
                itemno: 'C364',
                itemname: '低速汽车制造',
                children: [
                  {
                    itemno: 'C3640',
                    itemname: '低速汽车制造'
                  }
                ]
              },
              {
                itemno: 'C365',
                itemname: '电车制造',
                children: [
                  {
                    itemno: 'C3650',
                    itemname: '电车制造'
                  }
                ]
              },
              {
                itemno: 'C366',
                itemname: '汽车车身、挂车制造',
                children: [
                  {
                    itemno: 'C3660',
                    itemname: '汽车车身、挂车制造'
                  }
                ]
              },
              {
                itemno: 'C367',
                itemname: '汽车零部件及配件制造',
                children: [
                  {
                    itemno: 'C3670',
                    itemname: '汽车零部件及配件制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C37',
            itemname: '铁路、船舶、航空航天和其他运输设备制造业',
            children: [
              {
                itemno: 'C371',
                itemname: '铁路运输设备制造',
                children: [
                  {
                    itemno: 'C3711',
                    itemname: '高铁车组制造'
                  },
                  {
                    itemno: 'C3712',
                    itemname: '铁路机车车辆制造'
                  },
                  {
                    itemno: 'C3713',
                    itemname: '窄轨机车车辆制造'
                  },
                  {
                    itemno: 'C3714',
                    itemname: '高铁设备、配件制造'
                  },
                  {
                    itemno: 'C3715',
                    itemname: '铁路机车车辆配件制造'
                  },
                  {
                    itemno: 'C3716',
                    itemname: '铁路专用设备及器材、配件制造'
                  },
                  {
                    itemno: 'C3719',
                    itemname: '其他铁路运输设备制造'
                  }
                ]
              },
              {
                itemno: 'C372',
                itemname: '城市轨道交通设备制造',
                children: [
                  {
                    itemno: 'C3720',
                    itemname: '城市轨道交通设备制造'
                  }
                ]
              },
              {
                itemno: 'C373',
                itemname: '船舶及相关装置制造',
                children: [
                  {
                    itemno: 'C3731',
                    itemname: '金属船舶制造'
                  },
                  {
                    itemno: 'C3732',
                    itemname: '非金属船舶制造'
                  },
                  {
                    itemno: 'C3733',
                    itemname: '娱乐船和运动船制造'
                  },
                  {
                    itemno: 'C3734',
                    itemname: '船用配套设备制造'
                  },
                  {
                    itemno: 'C3735',
                    itemname: '船舶改装'
                  },
                  {
                    itemno: 'C3736',
                    itemname: '船舶拆除'
                  },
                  {
                    itemno: 'C3737',
                    itemname: '海洋工程装备制造'
                  },
                  {
                    itemno: 'C3739',
                    itemname: '航标器材及其他相关装置制造'
                  }
                ]
              },
              {
                itemno: 'C374',
                itemname: '航空、航天器及设备制造',
                children: [
                  {
                    itemno: 'C3741',
                    itemname: '飞机制造'
                  },
                  {
                    itemno: 'C3742',
                    itemname: '航天器及运载火箭制造'
                  },
                  {
                    itemno: 'C3743',
                    itemname: '航天相关设备制造'
                  },
                  {
                    itemno: 'C3744',
                    itemname: '航空相关设备制造'
                  },
                  {
                    itemno: 'C3749',
                    itemname: '其他航空航天器制造'
                  }
                ]
              },
              {
                itemno: 'C375',
                itemname: '摩托车制造',
                children: [
                  {
                    itemno: 'C3751',
                    itemname: '摩托车整车制造'
                  },
                  {
                    itemno: 'C3752',
                    itemname: '摩托车零部件及配件制造'
                  }
                ]
              },
              {
                itemno: 'C376',
                itemname: '自行车和残疾人座车制造',
                children: [
                  {
                    itemno: 'C3761',
                    itemname: '自行车制造'
                  },
                  {
                    itemno: 'C3762',
                    itemname: '残疾人座车制造'
                  }
                ]
              },
              {
                itemno: 'C377',
                itemname: '助动车制造',
                children: [
                  {
                    itemno: 'C3770',
                    itemname: '助动车制造'
                  }
                ]
              },
              {
                itemno: 'C378',
                itemname: '非公路休闲车及零配件制造',
                children: [
                  {
                    itemno: 'C3780',
                    itemname: '非公路休闲车及零配件制造'
                  }
                ]
              },
              {
                itemno: 'C379',
                itemname: '潜水救捞及其他未列明运输设备制造',
                children: [
                  {
                    itemno: 'C3791',
                    itemname: '潜水装备制造'
                  },
                  {
                    itemno: 'C3792',
                    itemname: '水下救捞装备制造'
                  },
                  {
                    itemno: 'C3799',
                    itemname: '其他未列明运输设备制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C38',
            itemname: '电气机械和器材制造业',
            children: [
              {
                itemno: 'C381',
                itemname: '电机制造',
                children: [
                  {
                    itemno: 'C3811',
                    itemname: '发电机及发电机组制造'
                  },
                  {
                    itemno: 'C3812',
                    itemname: '电动机制造'
                  },
                  {
                    itemno: 'C3813',
                    itemname: '微特电机及组件制造'
                  },
                  {
                    itemno: 'C3819',
                    itemname: '其他电机制造'
                  }
                ]
              },
              {
                itemno: 'C382',
                itemname: '输配电及控制设备制造',
                children: [
                  {
                    itemno: 'C3821',
                    itemname: '变压器、整流器和电感器制造'
                  },
                  {
                    itemno: 'C3822',
                    itemname: '电容器及其配套设备制造'
                  },
                  {
                    itemno: 'C3823',
                    itemname: '配电开关控制设备制造'
                  },
                  {
                    itemno: 'C3824',
                    itemname: '电力电子元器件制造'
                  },
                  {
                    itemno: 'C3825',
                    itemname: '光伏设备及元器件制造'
                  },
                  {
                    itemno: 'C3829',
                    itemname: '其他输配电及控制设备制造'
                  }
                ]
              },
              {
                itemno: 'C383',
                itemname: '电线、电缆、光缆及电工器材制造',
                children: [
                  {
                    itemno: 'C3831',
                    itemname: '电线、电缆制造'
                  },
                  {
                    itemno: 'C3832',
                    itemname: '光纤制造'
                  },
                  {
                    itemno: 'C3833',
                    itemname: '光缆制造'
                  },
                  {
                    itemno: 'C3834',
                    itemname: '绝缘制品制造'
                  },
                  {
                    itemno: 'C3839',
                    itemname: '其他电工器材制造'
                  }
                ]
              },
              {
                itemno: 'C384',
                itemname: '电池制造',
                children: [
                  {
                    itemno: 'C3841',
                    itemname: '锂离子电池制造'
                  },
                  {
                    itemno: 'C3842',
                    itemname: '镍氢电池制造'
                  },
                  {
                    itemno: 'C3843',
                    itemname: '铅蓄电池制造'
                  },
                  {
                    itemno: 'C3844',
                    itemname: '锌锰电池制造'
                  },
                  {
                    itemno: 'C3849',
                    itemname: '其他电池制造'
                  }
                ]
              },
              {
                itemno: 'C385',
                itemname: '家用电力器具制造',
                children: [
                  {
                    itemno: 'C3851',
                    itemname: '家用制冷电器具制造'
                  },
                  {
                    itemno: 'C3852',
                    itemname: '家用空气调节器制造'
                  },
                  {
                    itemno: 'C3853',
                    itemname: '家用通风电器具制造'
                  },
                  {
                    itemno: 'C3854',
                    itemname: '家用厨房电器具制造'
                  },
                  {
                    itemno: 'C3855',
                    itemname: '家用清洁卫生电器具制造'
                  },
                  {
                    itemno: 'C3856',
                    itemname: '家用美容、保健护理电器具制造'
                  },
                  {
                    itemno: 'C3857',
                    itemname: '家用电力器具专用配件制造'
                  },
                  {
                    itemno: 'C3859',
                    itemname: '其他家用电力器具制造'
                  }
                ]
              },
              {
                itemno: 'C386',
                itemname: '非电力家用器具制造',
                children: [
                  {
                    itemno: 'C3861',
                    itemname: '燃气及类似能源家用器具制造'
                  },
                  {
                    itemno: 'C3862',
                    itemname: '太阳能器具制造'
                  },
                  {
                    itemno: 'C3869',
                    itemname: '其他非电力家用器具制造'
                  }
                ]
              },
              {
                itemno: 'C387',
                itemname: '照明器具制造',
                children: [
                  {
                    itemno: 'C3871',
                    itemname: '电光源制造'
                  },
                  {
                    itemno: 'C3872',
                    itemname: '照明灯具制造'
                  },
                  {
                    itemno: 'C3873',
                    itemname: '舞台及场地用灯制造'
                  },
                  {
                    itemno: 'C3874',
                    itemname: '智能照明器具制造'
                  },
                  {
                    itemno: 'C3879',
                    itemname: '灯用电器附件及其他照明器具制造'
                  }
                ]
              },
              {
                itemno: 'C389',
                itemname: '其他电气机械及器材制造',
                children: [
                  {
                    itemno: 'C3891',
                    itemname: '电气信号设备装置制造'
                  },
                  {
                    itemno: 'C3899',
                    itemname: '其他未列明电气机械及器材制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C39',
            itemname: '计算机、通信和其他电子设备制造业',
            children: [
              {
                itemno: 'C391',
                itemname: '计算机制造',
                children: [
                  {
                    itemno: 'C3911',
                    itemname: '计算机整机制造'
                  },
                  {
                    itemno: 'C3912',
                    itemname: '计算机零部件制造'
                  },
                  {
                    itemno: 'C3913',
                    itemname: '计算机外围设备制造'
                  },
                  {
                    itemno: 'C3914',
                    itemname: '工业控制计算机及系统制造'
                  },
                  {
                    itemno: 'C3915',
                    itemname: '信息安全设备制造'
                  },
                  {
                    itemno: 'C3919',
                    itemname: '其他计算机制造'
                  }
                ]
              },
              {
                itemno: 'C392',
                itemname: '通信设备制造',
                children: [
                  {
                    itemno: 'C3921',
                    itemname: '通信系统设备制造'
                  },
                  {
                    itemno: 'C3922',
                    itemname: '通信终端设备制造'
                  }
                ]
              },
              {
                itemno: 'C393',
                itemname: '广播电视设备制造',
                children: [
                  {
                    itemno: 'C3931',
                    itemname: '广播电视节目制作及发射设备制造'
                  },
                  {
                    itemno: 'C3932',
                    itemname: '广播电视接收设备制造'
                  },
                  {
                    itemno: 'C3933',
                    itemname: '广播电视专用配件制造'
                  },
                  {
                    itemno: 'C3934',
                    itemname: '专业音响设备制造'
                  },
                  {
                    itemno: 'C3939',
                    itemname: '应用电视设备及其他广播电视设备制造'
                  }
                ]
              },
              {
                itemno: 'C394',
                itemname: '雷达及配套设备制造',
                children: [
                  {
                    itemno: 'C3940',
                    itemname: '雷达及配套设备制造'
                  }
                ]
              },
              {
                itemno: 'C395',
                itemname: '视听设备制造',
                children: [
                  {
                    itemno: 'C3951',
                    itemname: '电视机制造'
                  },
                  {
                    itemno: 'C3952',
                    itemname: '音响设备制造'
                  },
                  {
                    itemno: 'C3953',
                    itemname: '影视录放设备制造'
                  }
                ]
              },
              {
                itemno: 'C396',
                itemname: '智能消费设备制造',
                children: [
                  {
                    itemno: 'C3961',
                    itemname: '可穿戴智能设备制造'
                  },
                  {
                    itemno: 'C3962',
                    itemname: '智能车载设备制造'
                  },
                  {
                    itemno: 'C3963',
                    itemname: '智能无人飞行器制造'
                  },
                  {
                    itemno: 'C3964',
                    itemname: '服务消费机器人制造'
                  }
                ]
              },
              {
                itemno: 'C397',
                itemname: '电子器件制造',
                children: [
                  {
                    itemno: 'C3971',
                    itemname: '电子真空器件制造'
                  },
                  {
                    itemno: 'C3972',
                    itemname: '半导体分立器件制造'
                  },
                  {
                    itemno: 'C3973',
                    itemname: '集成电路制造'
                  },
                  {
                    itemno: 'C3974',
                    itemname: '显示器件制造'
                  },
                  {
                    itemno: 'C3975',
                    itemname: '半导体照明器件制造'
                  },
                  {
                    itemno: 'C3976',
                    itemname: '光电子器件制造'
                  },
                  {
                    itemno: 'C3979',
                    itemname: '其他电子器件制造'
                  }
                ]
              },
              {
                itemno: 'C398',
                itemname: '电子元件及电子专用材料制造',
                children: [
                  {
                    itemno: 'C3981',
                    itemname: '电阻电容电感元件制造'
                  },
                  {
                    itemno: 'C3982',
                    itemname: '电子电路制造'
                  },
                  {
                    itemno: 'C3983',
                    itemname: '敏感元件及传感器制造'
                  },
                  {
                    itemno: 'C3984',
                    itemname: '电声器件及零件制造'
                  },
                  {
                    itemno: 'C3985',
                    itemname: '电子专用材料制造'
                  },
                  {
                    itemno: 'C3989',
                    itemname: '其他电子元件制造'
                  }
                ]
              },
              {
                itemno: 'C399',
                itemname: '其他电子设备制造',
                children: [
                  {
                    itemno: 'C3990',
                    itemname: '其他电子设备制造'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C40',
            itemname: '仪器仪表制造业',
            children: [
              {
                itemno: 'C401',
                itemname: '通用仪器仪表制造',
                children: [
                  {
                    itemno: 'C4011',
                    itemname: '工业自动控制系统装置制造'
                  },
                  {
                    itemno: 'C4012',
                    itemname: '电工仪器仪表制造'
                  },
                  {
                    itemno: 'C4013',
                    itemname: '绘图、计算及测量仪器制造'
                  },
                  {
                    itemno: 'C4014',
                    itemname: '实验分析仪器制造'
                  },
                  {
                    itemno: 'C4015',
                    itemname: '试验机制造'
                  },
                  {
                    itemno: 'C4016',
                    itemname: '供应用仪器仪表制造'
                  },
                  {
                    itemno: 'C4019',
                    itemname: '其他通用仪器制造'
                  }
                ]
              },
              {
                itemno: 'C402',
                itemname: '专用仪器仪表制造',
                children: [
                  {
                    itemno: 'C4021',
                    itemname: '环境监测专用仪器仪表制造'
                  },
                  {
                    itemno: 'C4022',
                    itemname: '运输设备及生产用计数仪表制造'
                  },
                  {
                    itemno: 'C4023',
                    itemname: '导航、测绘、气象及海洋专用仪器制造'
                  },
                  {
                    itemno: 'C4024',
                    itemname: '农林牧渔专用仪器仪表制造'
                  },
                  {
                    itemno: 'C4025',
                    itemname: '地质勘探和地震专用仪器制造'
                  },
                  {
                    itemno: 'C4026',
                    itemname: '教学专用仪器制造'
                  },
                  {
                    itemno: 'C4027',
                    itemname: '核子及核辐射测量仪器制造'
                  },
                  {
                    itemno: 'C4028',
                    itemname: '电子测量仪器制造'
                  },
                  {
                    itemno: 'C4029',
                    itemname: '其他专用仪器制造'
                  }
                ]
              },
              {
                itemno: 'C403',
                itemname: '钟表与计时仪器制造',
                children: [
                  {
                    itemno: 'C4030',
                    itemname: '钟表与计时仪器制造'
                  }
                ]
              },
              {
                itemno: 'C404',
                itemname: '光学仪器制造',
                children: [
                  {
                    itemno: 'C4040',
                    itemname: '光学仪器制造'
                  }
                ]
              },
              {
                itemno: 'C405',
                itemname: '衡器制造',
                children: [
                  {
                    itemno: 'C4050',
                    itemname: '衡器制造'
                  }
                ]
              },
              {
                itemno: 'C409',
                itemname: '其他仪器仪表制造业',
                children: [
                  {
                    itemno: 'C4090',
                    itemname: '其他仪器仪表制造业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C41',
            itemname: '其他制造业',
            children: [
              {
                itemno: 'C411',
                itemname: '日用杂品制造',
                children: [
                  {
                    itemno: 'C4111',
                    itemname: '鬃毛加工、制刷及清扫工具制造'
                  },
                  {
                    itemno: 'C4119',
                    itemname: '其他日用杂品制造'
                  }
                ]
              },
              {
                itemno: 'C412',
                itemname: '核辐射加工',
                children: [
                  {
                    itemno: 'C4120',
                    itemname: '核辐射加工'
                  }
                ]
              },
              {
                itemno: 'C419',
                itemname: '其他未列明制造业',
                children: [
                  {
                    itemno: 'C4190',
                    itemname: '其他未列明制造业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C42',
            itemname: '废弃资源综合利用业',
            children: [
              {
                itemno: 'C421',
                itemname: '金属废料和碎屑加工处理',
                children: [
                  {
                    itemno: 'C4210',
                    itemname: '金属废料和碎屑加工处理'
                  }
                ]
              },
              {
                itemno: 'C422',
                itemname: '非金属废料和碎屑加工处理',
                children: [
                  {
                    itemno: 'C4220',
                    itemname: '非金属废料和碎屑加工处理'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'C43',
            itemname: '金属制品、机械和设备修理业',
            children: [
              {
                itemno: 'C431',
                itemname: '金属制品修理',
                children: [
                  {
                    itemno: 'C4310',
                    itemname: '金属制品修理'
                  }
                ]
              },
              {
                itemno: 'C432',
                itemname: '通用设备修理',
                children: [
                  {
                    itemno: 'C4320',
                    itemname: '通用设备修理'
                  }
                ]
              },
              {
                itemno: 'C433',
                itemname: '专用设备修理',
                children: [
                  {
                    itemno: 'C4330',
                    itemname: '专用设备修理'
                  }
                ]
              },
              {
                itemno: 'C434',
                itemname: '铁路、船舶、航空航天等运输设备修理',
                children: [
                  {
                    itemno: 'C4341',
                    itemname: '铁路运输设备修理'
                  },
                  {
                    itemno: 'C4342',
                    itemname: '船舶修理'
                  },
                  {
                    itemno: 'C4343',
                    itemname: '航空航天器修理'
                  },
                  {
                    itemno: 'C4349',
                    itemname: '其他运输设备修理'
                  }
                ]
              },
              {
                itemno: 'C435',
                itemname: '电气设备修理',
                children: [
                  {
                    itemno: 'C4350',
                    itemname: '电气设备修理'
                  }
                ]
              },
              {
                itemno: 'C436',
                itemname: '仪器仪表修理',
                children: [
                  {
                    itemno: 'C4360',
                    itemname: '仪器仪表修理'
                  }
                ]
              },
              {
                itemno: 'C439',
                itemname: '其他机械和设备修理业',
                children: [
                  {
                    itemno: 'C4390',
                    itemname: '其他机械和设备修理业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'D',
        itemname: '电力、热力、燃气及水生产和供应业',
        children: [
          {
            itemno: 'D44',
            itemname: '电力、热力生产和供应业',
            children: [
              {
                itemno: 'D441',
                itemname: '电力生产',
                children: [
                  {
                    itemno: 'D4411',
                    itemname: '火力发电'
                  },
                  {
                    itemno: 'D4412',
                    itemname: '热电联产'
                  },
                  {
                    itemno: 'D4413',
                    itemname: '水力发电'
                  },
                  {
                    itemno: 'D4414',
                    itemname: '核力发电'
                  },
                  {
                    itemno: 'D4415',
                    itemname: '风力发电'
                  },
                  {
                    itemno: 'D4416',
                    itemname: '太阳能发电'
                  },
                  {
                    itemno: 'D4417',
                    itemname: '生物质能发电'
                  },
                  {
                    itemno: 'D4419',
                    itemname: '其他电力生产'
                  }
                ]
              },
              {
                itemno: 'D442',
                itemname: '电力供应',
                children: [
                  {
                    itemno: 'D4420',
                    itemname: '电力供应'
                  }
                ]
              },
              {
                itemno: 'D443',
                itemname: '热力生产和供应',
                children: [
                  {
                    itemno: 'D4430',
                    itemname: '热力生产和供应'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'D45',
            itemname: '燃气生产和供应业',
            children: [
              {
                itemno: 'D451',
                itemname: '燃气生产和供应业',
                children: [
                  {
                    itemno: 'D4511',
                    itemname: '天然气生产和供应业'
                  },
                  {
                    itemno: 'D4512',
                    itemname: '液化石油气生产和供应业'
                  },
                  {
                    itemno: 'D4513',
                    itemname: '煤气生产和供应业'
                  }
                ]
              },
              {
                itemno: 'D452',
                itemname: '生物质燃气生产和供应业',
                children: [
                  {
                    itemno: 'D4520',
                    itemname: '生物质燃气生产和供应业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'D46',
            itemname: '水的生产和供应业',
            children: [
              {
                itemno: 'D461',
                itemname: '自来水生产和供应',
                children: [
                  {
                    itemno: 'D4610',
                    itemname: '自来水生产和供应'
                  }
                ]
              },
              {
                itemno: 'D462',
                itemname: '污水处理及其再生利用',
                children: [
                  {
                    itemno: 'D4620',
                    itemname: '污水处理及其再生利用'
                  }
                ]
              },
              {
                itemno: 'D463',
                itemname: '海水淡化处理',
                children: [
                  {
                    itemno: 'D4630',
                    itemname: '海水淡化处理'
                  }
                ]
              },
              {
                itemno: 'D469',
                itemname: '其他水的处理、利用与分配',
                children: [
                  {
                    itemno: 'D4690',
                    itemname: '其他水的处理、利用与分配'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'E',
        itemname: '建筑业',
        children: [
          {
            itemno: 'E47',
            itemname: '房屋建筑业',
            children: [
              {
                itemno: 'E471',
                itemname: '住宅房屋建筑',
                children: [
                  {
                    itemno: 'E4710',
                    itemname: '住宅房屋建筑'
                  }
                ]
              },
              {
                itemno: 'E472',
                itemname: '体育场馆建筑',
                children: [
                  {
                    itemno: 'E4720',
                    itemname: '体育场馆建筑'
                  }
                ]
              },
              {
                itemno: 'E479',
                itemname: '其他房屋建筑业',
                children: [
                  {
                    itemno: 'E4790',
                    itemname: '其他房屋建筑业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'E48',
            itemname: '土木工程建筑业',
            children: [
              {
                itemno: 'E481',
                itemname: '铁路、道路、隧道和桥梁工程建筑',
                children: [
                  {
                    itemno: 'E4811',
                    itemname: '铁路工程建筑'
                  },
                  {
                    itemno: 'E4812',
                    itemname: '公路工程建筑'
                  },
                  {
                    itemno: 'E4813',
                    itemname: '市政道路工程建筑'
                  },
                  {
                    itemno: 'E4814',
                    itemname: '城市轨道交通工程建筑'
                  },
                  {
                    itemno: 'E4819',
                    itemname: '其他道路、隧道和桥梁工程建筑'
                  }
                ]
              },
              {
                itemno: 'E482',
                itemname: '水利和水运工程建筑',
                children: [
                  {
                    itemno: 'E4821',
                    itemname: '水源及供水设施工程建筑'
                  },
                  {
                    itemno: 'E4822',
                    itemname: '河湖治理及防洪设施工程建筑'
                  },
                  {
                    itemno: 'E4823',
                    itemname: '港口及航运设施工程建筑'
                  }
                ]
              },
              {
                itemno: 'E483',
                itemname: '海洋工程建筑',
                children: [
                  {
                    itemno: 'E4831',
                    itemname: '海洋油气资源开发利用工程建筑'
                  },
                  {
                    itemno: 'E4832',
                    itemname: '海洋能源开发利用工程建筑'
                  },
                  {
                    itemno: 'E4833',
                    itemname: '海底隧道工程建筑'
                  },
                  {
                    itemno: 'E4834',
                    itemname: '海底设施铺设工程建筑'
                  },
                  {
                    itemno: 'E4839',
                    itemname: '其他海洋工程建筑'
                  }
                ]
              },
              {
                itemno: 'E484',
                itemname: '工矿工程建筑',
                children: [
                  {
                    itemno: 'E4840',
                    itemname: '工矿工程建筑'
                  }
                ]
              },
              {
                itemno: 'E485',
                itemname: '架线和管道工程建筑',
                children: [
                  {
                    itemno: 'E4851',
                    itemname: '架线及设备工程建筑'
                  },
                  {
                    itemno: 'E4852',
                    itemname: '管道工程建筑'
                  },
                  {
                    itemno: 'E4853',
                    itemname: '地下综合管廊工程建筑'
                  }
                ]
              },
              {
                itemno: 'E486',
                itemname: '节能环保工程施工',
                children: [
                  {
                    itemno: 'E4861',
                    itemname: '节能工程施工'
                  },
                  {
                    itemno: 'E4862',
                    itemname: '环保工程施工'
                  },
                  {
                    itemno: 'E4863',
                    itemname: '生态保护工程施工'
                  }
                ]
              },
              {
                itemno: 'E487',
                itemname: '电力工程施工',
                children: [
                  {
                    itemno: 'E4871',
                    itemname: '火力发电工程施工'
                  },
                  {
                    itemno: 'E4872',
                    itemname: '水力发电工程施工'
                  },
                  {
                    itemno: 'E4873',
                    itemname: '核电工程施工'
                  },
                  {
                    itemno: 'E4874',
                    itemname: '风能发电工程施工'
                  },
                  {
                    itemno: 'E4875',
                    itemname: '太阳能发电工程施工'
                  },
                  {
                    itemno: 'E4879',
                    itemname: '其他电力工程施工'
                  }
                ]
              },
              {
                itemno: 'E489',
                itemname: '其他土木工程建筑',
                children: [
                  {
                    itemno: 'E4891',
                    itemname: '园林绿化工程施工'
                  },
                  {
                    itemno: 'E4892',
                    itemname: '体育场地设施工程施工'
                  },
                  {
                    itemno: 'E4893',
                    itemname: '游乐设施工程施工'
                  },
                  {
                    itemno: 'E4899',
                    itemname: '其他土木工程建筑施工'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'E49',
            itemname: '建筑安装业',
            children: [
              {
                itemno: 'E491',
                itemname: '电气安装',
                children: [
                  {
                    itemno: 'E4910',
                    itemname: '电气安装'
                  }
                ]
              },
              {
                itemno: 'E492',
                itemname: '管道和设备安装',
                children: [
                  {
                    itemno: 'E4920',
                    itemname: '管道和设备安装'
                  }
                ]
              },
              {
                itemno: 'E499',
                itemname: '其他建筑安装业',
                children: [
                  {
                    itemno: 'E4991',
                    itemname: '体育场地设施安装'
                  },
                  {
                    itemno: 'E4999',
                    itemname: '其他建筑安装'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'E50',
            itemname: '建筑装饰、装修和其他建筑业',
            children: [
              {
                itemno: 'E501',
                itemname: '建筑装饰和装修业',
                children: [
                  {
                    itemno: 'E5011',
                    itemname: '公共建筑装饰和装修'
                  },
                  {
                    itemno: 'E5012',
                    itemname: '住宅装饰和装修'
                  },
                  {
                    itemno: 'E5013',
                    itemname: '建筑幕墙装饰和装修'
                  }
                ]
              },
              {
                itemno: 'E502',
                itemname: '建筑物拆除和场地准备活动',
                children: [
                  {
                    itemno: 'E5021',
                    itemname: '建筑物拆除活动'
                  },
                  {
                    itemno: 'E5022',
                    itemname: '场地准备活动'
                  }
                ]
              },
              {
                itemno: 'E503',
                itemname: '提供施工设备服务',
                children: [
                  {
                    itemno: 'E5030',
                    itemname: '提供施工设备服务'
                  }
                ]
              },
              {
                itemno: 'E509',
                itemname: '其他未列明建筑业',
                children: [
                  {
                    itemno: 'E5090',
                    itemname: '其他未列明建筑业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'F',
        itemname: '批发和零售业',
        children: [
          {
            itemno: 'F51',
            itemname: '批发业',
            children: [
              {
                itemno: 'F511',
                itemname: '农、林、牧、渔产品批发',
                children: [
                  {
                    itemno: 'F5111',
                    itemname: '谷物、豆及薯类批发'
                  },
                  {
                    itemno: 'F5112',
                    itemname: '种子批发'
                  },
                  {
                    itemno: 'F5113',
                    itemname: '畜牧渔业饲料批发'
                  },
                  {
                    itemno: 'F5114',
                    itemname: '棉、麻批发'
                  },
                  {
                    itemno: 'F5115',
                    itemname: '林业产品批发'
                  },
                  {
                    itemno: 'F5116',
                    itemname: '牲畜批发'
                  },
                  {
                    itemno: 'F5117',
                    itemname: '渔业产品批发'
                  },
                  {
                    itemno: 'F5119',
                    itemname: '其他农牧产品批发'
                  }
                ]
              },
              {
                itemno: 'F512',
                itemname: '食品、饮料及烟草制品批发',
                children: [
                  {
                    itemno: 'F5121',
                    itemname: '米、面制品及食用油批发'
                  },
                  {
                    itemno: 'F5122',
                    itemname: '糕点、糖果及糖批发'
                  },
                  {
                    itemno: 'F5123',
                    itemname: '果品、蔬菜批发'
                  },
                  {
                    itemno: 'F5124',
                    itemname: '肉、禽、蛋、奶及水产品批发'
                  },
                  {
                    itemno: 'F5125',
                    itemname: '盐及调味品批发'
                  },
                  {
                    itemno: 'F5126',
                    itemname: '营养和保健品批发'
                  },
                  {
                    itemno: 'F5127',
                    itemname: '酒、饮料及茶叶批发'
                  },
                  {
                    itemno: 'F5128',
                    itemname: '烟草制品批发'
                  },
                  {
                    itemno: 'F5129',
                    itemname: '其他食品批发'
                  }
                ]
              },
              {
                itemno: 'F513',
                itemname: '纺织、服装及家庭用品批发',
                children: [
                  {
                    itemno: 'F5131',
                    itemname: '纺织品、针织品及原料批发'
                  },
                  {
                    itemno: 'F5132',
                    itemname: '服装批发'
                  },
                  {
                    itemno: 'F5133',
                    itemname: '鞋帽批发'
                  },
                  {
                    itemno: 'F5134',
                    itemname: '化妆品及卫生用品批发'
                  },
                  {
                    itemno: 'F5135',
                    itemname: '厨具卫具及日用杂品批发'
                  },
                  {
                    itemno: 'F5136',
                    itemname: '灯具、装饰物品批发'
                  },
                  {
                    itemno: 'F5137',
                    itemname: '家用视听设备批发'
                  },
                  {
                    itemno: 'F5138',
                    itemname: '日用家电批发'
                  },
                  {
                    itemno: 'F5139',
                    itemname: '其他家庭用品批发'
                  }
                ]
              },
              {
                itemno: 'F514',
                itemname: '文化、体育用品及器材批发',
                children: [
                  {
                    itemno: 'F5141',
                    itemname: '文具用品批发'
                  },
                  {
                    itemno: 'F5142',
                    itemname: '体育用品及器材批发'
                  },
                  {
                    itemno: 'F5143',
                    itemname: '图书批发'
                  },
                  {
                    itemno: 'F5144',
                    itemname: '报刊批发'
                  },
                  {
                    itemno: 'F5145',
                    itemname: '音像制品、电子和数字出版物批发'
                  },
                  {
                    itemno: 'F5146',
                    itemname: '首饰、工艺品及收藏品批发'
                  },
                  {
                    itemno: 'F5147',
                    itemname: '乐器批发'
                  },
                  {
                    itemno: 'F5149',
                    itemname: '其他文化用品批发'
                  }
                ]
              },
              {
                itemno: 'F515',
                itemname: '医药及医疗器材批发',
                children: [
                  {
                    itemno: 'F5151',
                    itemname: '西药批发'
                  },
                  {
                    itemno: 'F5152',
                    itemname: '中药批发'
                  },
                  {
                    itemno: 'F5153',
                    itemname: '动物用药品批发'
                  },
                  {
                    itemno: 'F5154',
                    itemname: '医疗用品及器材批发'
                  }
                ]
              },
              {
                itemno: 'F516',
                itemname: '矿产品、建材及化工产品批发',
                children: [
                  {
                    itemno: 'F5161',
                    itemname: '煤炭及制品批发'
                  },
                  {
                    itemno: 'F5162',
                    itemname: '石油及制品批发'
                  },
                  {
                    itemno: 'F5163',
                    itemname: '非金属矿及制品批发'
                  },
                  {
                    itemno: 'F5164',
                    itemname: '金属及金属矿批发'
                  },
                  {
                    itemno: 'F5165',
                    itemname: '建材批发'
                  },
                  {
                    itemno: 'F5166',
                    itemname: '化肥批发'
                  },
                  {
                    itemno: 'F5167',
                    itemname: '农药批发'
                  },
                  {
                    itemno: 'F5168',
                    itemname: '农用薄膜批发'
                  },
                  {
                    itemno: 'F5169',
                    itemname: '其他化工产品批发'
                  }
                ]
              },
              {
                itemno: 'F517',
                itemname: '机械设备、五金产品及电子产品批发',
                children: [
                  {
                    itemno: 'F5171',
                    itemname: '农业机械批发'
                  },
                  {
                    itemno: 'F5172',
                    itemname: '汽车及零配件批发'
                  },
                  {
                    itemno: 'F5173',
                    itemname: '摩托车及零配件批发'
                  },
                  {
                    itemno: 'F5174',
                    itemname: '五金产品批发'
                  },
                  {
                    itemno: 'F5175',
                    itemname: '电气设备批发'
                  },
                  {
                    itemno: 'F5176',
                    itemname: '计算机、软件及辅助设备批发'
                  },
                  {
                    itemno: 'F5177',
                    itemname: '通讯设备批发'
                  },
                  {
                    itemno: 'F5178',
                    itemname: '广播影视设备批发'
                  },
                  {
                    itemno: 'F5179',
                    itemname: '其他机械设备及电子产品批发'
                  }
                ]
              },
              {
                itemno: 'F518',
                itemname: '贸易经纪与代理',
                children: [
                  {
                    itemno: 'F5181',
                    itemname: '贸易代理'
                  },
                  {
                    itemno: 'F5182',
                    itemname: '一般物品拍卖'
                  },
                  {
                    itemno: 'F5183',
                    itemname: '艺术品、收藏品拍卖'
                  },
                  {
                    itemno: 'F5184',
                    itemname: '艺术品代理'
                  },
                  {
                    itemno: 'F5189',
                    itemname: '其他贸易经纪与代理'
                  }
                ]
              },
              {
                itemno: 'F519',
                itemname: '其他批发业',
                children: [
                  {
                    itemno: 'F5191',
                    itemname: '再生物资回收与批发'
                  },
                  {
                    itemno: 'F5192',
                    itemname: '宠物食品用品批发'
                  },
                  {
                    itemno: 'F5193',
                    itemname: '互联网批发'
                  },
                  {
                    itemno: 'F5199',
                    itemname: '其他未列明批发业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'F52',
            itemname: '零售业',
            children: [
              {
                itemno: 'F521',
                itemname: '综合零售',
                children: [
                  {
                    itemno: 'F5211',
                    itemname: '百货零售'
                  },
                  {
                    itemno: 'F5212',
                    itemname: '超级市场零售'
                  },
                  {
                    itemno: 'F5213',
                    itemname: '便利店零售'
                  },
                  {
                    itemno: 'F5219',
                    itemname: '其他综合零售'
                  }
                ]
              },
              {
                itemno: 'F522',
                itemname: '食品、饮料及烟草制品专门零售',
                children: [
                  {
                    itemno: 'F5221',
                    itemname: '粮油零售'
                  },
                  {
                    itemno: 'F5222',
                    itemname: '糕点、面包零售'
                  },
                  {
                    itemno: 'F5223',
                    itemname: '果品、蔬菜零售'
                  },
                  {
                    itemno: 'F5224',
                    itemname: '肉、禽、蛋、奶及水产品零售'
                  },
                  {
                    itemno: 'F5225',
                    itemname: '营养和保健品零售'
                  },
                  {
                    itemno: 'F5226',
                    itemname: '酒、饮料及茶叶零售'
                  },
                  {
                    itemno: 'F5227',
                    itemname: '烟草制品零售'
                  },
                  {
                    itemno: 'F5229',
                    itemname: '其他食品零售'
                  }
                ]
              },
              {
                itemno: 'F523',
                itemname: '纺织、服装及日用品专门零售',
                children: [
                  {
                    itemno: 'F5231',
                    itemname: '纺织品及针织品零售'
                  },
                  {
                    itemno: 'F5232',
                    itemname: '服装零售'
                  },
                  {
                    itemno: 'F5233',
                    itemname: '鞋帽零售'
                  },
                  {
                    itemno: 'F5234',
                    itemname: '化妆品及卫生用品零售'
                  },
                  {
                    itemno: 'F5235',
                    itemname: '厨具卫具及日用杂品零售'
                  },
                  {
                    itemno: 'F5236',
                    itemname: '钟表、眼镜零售'
                  },
                  {
                    itemno: 'F5237',
                    itemname: '箱包零售'
                  },
                  {
                    itemno: 'F5238',
                    itemname: '自行车等代步设备零售'
                  },
                  {
                    itemno: 'F5239',
                    itemname: '其他日用品零售'
                  }
                ]
              },
              {
                itemno: 'F524',
                itemname: '文化、体育用品及器材专门零售',
                children: [
                  {
                    itemno: 'F5241',
                    itemname: '文具用品零售'
                  },
                  {
                    itemno: 'F5242',
                    itemname: '体育用品及器材零售'
                  },
                  {
                    itemno: 'F5243',
                    itemname: '图书、报刊零售'
                  },
                  {
                    itemno: 'F5244',
                    itemname: '音像制品、电子和数字出版物零售'
                  },
                  {
                    itemno: 'F5245',
                    itemname: '珠宝首饰零售'
                  },
                  {
                    itemno: 'F5246',
                    itemname: '工艺美术品及收藏品零售'
                  },
                  {
                    itemno: 'F5247',
                    itemname: '乐器零售'
                  },
                  {
                    itemno: 'F5248',
                    itemname: '照相器材零售'
                  },
                  {
                    itemno: 'F5249',
                    itemname: '其他文化用品零售'
                  }
                ]
              },
              {
                itemno: 'F525',
                itemname: '医药及医疗器材专门零售',
                children: [
                  {
                    itemno: 'F5251',
                    itemname: '西药零售'
                  },
                  {
                    itemno: 'F5252',
                    itemname: '中药零售'
                  },
                  {
                    itemno: 'F5253',
                    itemname: '动物用药品零售'
                  },
                  {
                    itemno: 'F5254',
                    itemname: '医疗用品及器材零售'
                  },
                  {
                    itemno: 'F5255',
                    itemname: '保健辅助治疗器材零售'
                  }
                ]
              },
              {
                itemno: 'F526',
                itemname: '汽车、摩托车、零配件和燃料及其他动力销售',
                children: [
                  {
                    itemno: 'F5261',
                    itemname: '汽车新车零售'
                  },
                  {
                    itemno: 'F5262',
                    itemname: '汽车旧车零售'
                  },
                  {
                    itemno: 'F5263',
                    itemname: '汽车零配件零售'
                  },
                  {
                    itemno: 'F5264',
                    itemname: '摩托车及零配件零售'
                  },
                  {
                    itemno: 'F5265',
                    itemname: '机动车燃油零售'
                  },
                  {
                    itemno: 'F5266',
                    itemname: '机动车燃气零售'
                  }
                ]
              },
              {
                itemno: 'F527',
                itemname: '家用电器及电子产品专门零售',
                children: [
                  {
                    itemno: 'F5271',
                    itemname: '家用视听设备零售'
                  },
                  {
                    itemno: 'F5272',
                    itemname: '日用家电零售'
                  },
                  {
                    itemno: 'F5273',
                    itemname: '计算机、软件及辅助设备零售'
                  },
                  {
                    itemno: 'F5274',
                    itemname: '通信设备零售'
                  },
                  {
                    itemno: 'F5279',
                    itemname: '其他电子产品零售'
                  }
                ]
              },
              {
                itemno: 'F528',
                itemname: '五金、家具及室内装饰材料专门零售',
                children: [
                  {
                    itemno: 'F5281',
                    itemname: '五金零售'
                  },
                  {
                    itemno: 'F5282',
                    itemname: '灯具零售'
                  },
                  {
                    itemno: 'F5283',
                    itemname: '家具零售'
                  },
                  {
                    itemno: 'F5284',
                    itemname: '涂料零售'
                  },
                  {
                    itemno: 'F5285',
                    itemname: '卫生洁具零售'
                  },
                  {
                    itemno: 'F5286',
                    itemname: '木质装饰材料零售'
                  },
                  {
                    itemno: 'F5287',
                    itemname: '陶瓷、石材装饰材料零售'
                  },
                  {
                    itemno: 'F5289',
                    itemname: '其他室内装饰材料零售'
                  }
                ]
              },
              {
                itemno: 'F529',
                itemname: '货摊、无店铺及其他零售业',
                children: [
                  {
                    itemno: 'F5291',
                    itemname: '流动货摊零售'
                  },
                  {
                    itemno: 'F5292',
                    itemname: '互联网零售'
                  },
                  {
                    itemno: 'F5293',
                    itemname: '邮购及电视、电话零售'
                  },
                  {
                    itemno: 'F5294',
                    itemname: '自动售货机零售'
                  },
                  {
                    itemno: 'F5295',
                    itemname: '旧货零售'
                  },
                  {
                    itemno: 'F5296',
                    itemname: '生活用燃料零售'
                  },
                  {
                    itemno: 'F5297',
                    itemname: '宠物食品用品零售'
                  },
                  {
                    itemno: 'F5299',
                    itemname: '其他未列明零售业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'G',
        itemname: '交通运输、仓储和邮政业',
        children: [
          {
            itemno: 'G53',
            itemname: '铁路运输业',
            children: [
              {
                itemno: 'G531',
                itemname: '铁路旅客运输',
                children: [
                  {
                    itemno: 'G5311',
                    itemname: '高速铁路旅客运输'
                  },
                  {
                    itemno: 'G5312',
                    itemname: '城际铁路旅客运输'
                  },
                  {
                    itemno: 'G5313',
                    itemname: '普通铁路旅客运输'
                  }
                ]
              },
              {
                itemno: 'G532',
                itemname: '铁路货物运输',
                children: [
                  {
                    itemno: 'G5320',
                    itemname: '铁路货物运输'
                  }
                ]
              },
              {
                itemno: 'G533',
                itemname: '铁路运输辅助活动',
                children: [
                  {
                    itemno: 'G5331',
                    itemname: '客运火车站'
                  },
                  {
                    itemno: 'G5332',
                    itemname: '货运火车站（场）'
                  },
                  {
                    itemno: 'G5333',
                    itemname: '铁路运输维护活动'
                  },
                  {
                    itemno: 'G5339',
                    itemname: '其他铁路运输辅助活动'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'G54',
            itemname: '道路运输业',
            children: [
              {
                itemno: 'G541',
                itemname: '城市公共交通运输',
                children: [
                  {
                    itemno: 'G5411',
                    itemname: '公共电汽车客运'
                  },
                  {
                    itemno: 'G5412',
                    itemname: '城市轨道交通'
                  },
                  {
                    itemno: 'G5413',
                    itemname: '出租车客运'
                  },
                  {
                    itemno: 'G5414',
                    itemname: '公共自行车服务'
                  },
                  {
                    itemno: 'G5419',
                    itemname: '其他城市公共交通运输'
                  }
                ]
              },
              {
                itemno: 'G542',
                itemname: '公路旅客运输',
                children: [
                  {
                    itemno: 'G5421',
                    itemname: '长途客运'
                  },
                  {
                    itemno: 'G5422',
                    itemname: '旅游客运'
                  },
                  {
                    itemno: 'G5429',
                    itemname: '其他公路客运'
                  }
                ]
              },
              {
                itemno: 'G543',
                itemname: '道路货物运输',
                children: [
                  {
                    itemno: 'G5431',
                    itemname: '普通货物道路运输'
                  },
                  {
                    itemno: 'G5432',
                    itemname: '冷藏车道路运输'
                  },
                  {
                    itemno: 'G5433',
                    itemname: '集装箱道路运输'
                  },
                  {
                    itemno: 'G5434',
                    itemname: '大型货物道路运输'
                  },
                  {
                    itemno: 'G5435',
                    itemname: '危险货物道路运输'
                  },
                  {
                    itemno: 'G5436',
                    itemname: '邮件包裹道路运输'
                  },
                  {
                    itemno: 'G5437',
                    itemname: '城市配送'
                  },
                  {
                    itemno: 'G5438',
                    itemname: '搬家运输'
                  },
                  {
                    itemno: 'G5439',
                    itemname: '其他道路货物运输'
                  }
                ]
              },
              {
                itemno: 'G544',
                itemname: '道路运输辅助活动',
                children: [
                  {
                    itemno: 'G5441',
                    itemname: '客运汽车站'
                  },
                  {
                    itemno: 'G5442',
                    itemname: '货运枢纽（站）'
                  },
                  {
                    itemno: 'G5443',
                    itemname: '公路管理与养护'
                  },
                  {
                    itemno: 'G5449',
                    itemname: '其他道路运输辅助活动'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'G55',
            itemname: '水上运输业',
            children: [
              {
                itemno: 'G551',
                itemname: '水上旅客运输',
                children: [
                  {
                    itemno: 'G5511',
                    itemname: '海上旅客运输'
                  },
                  {
                    itemno: 'G5512',
                    itemname: '内河旅客运输'
                  },
                  {
                    itemno: 'G5513',
                    itemname: '客运轮渡运输'
                  }
                ]
              },
              {
                itemno: 'G552',
                itemname: '水上货物运输',
                children: [
                  {
                    itemno: 'G5521',
                    itemname: '远洋货物运输'
                  },
                  {
                    itemno: 'G5522',
                    itemname: '沿海货物运输'
                  },
                  {
                    itemno: 'G5523',
                    itemname: '内河货物运输'
                  }
                ]
              },
              {
                itemno: 'G553',
                itemname: '水上运输辅助活动',
                children: [
                  {
                    itemno: 'G5531',
                    itemname: '客运港口'
                  },
                  {
                    itemno: 'G5532',
                    itemname: '货运港口'
                  },
                  {
                    itemno: 'G5539',
                    itemname: '其他水上运输辅助活动'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'G56',
            itemname: '航空运输业',
            children: [
              {
                itemno: 'G561',
                itemname: '航空客货运输',
                children: [
                  {
                    itemno: 'G5611',
                    itemname: '航空旅客运输'
                  },
                  {
                    itemno: 'G5612',
                    itemname: '航空货物运输'
                  }
                ]
              },
              {
                itemno: 'G562',
                itemname: '通用航空服务',
                children: [
                  {
                    itemno: 'G5621',
                    itemname: '通用航空生产服务'
                  },
                  {
                    itemno: 'G5622',
                    itemname: '观光游览航空服务'
                  },
                  {
                    itemno: 'G5623',
                    itemname: '体育航空运动服务'
                  },
                  {
                    itemno: 'G5629',
                    itemname: '其他通用航空服务'
                  }
                ]
              },
              {
                itemno: 'G563',
                itemname: '航空运输辅助活动',
                children: [
                  {
                    itemno: 'G5631',
                    itemname: '机场'
                  },
                  {
                    itemno: 'G5632',
                    itemname: '空中交通管理'
                  },
                  {
                    itemno: 'G5639',
                    itemname: '其他航空运输辅助活动'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'G57',
            itemname: '管道运输业',
            children: [
              {
                itemno: 'G571',
                itemname: '海底管道运输',
                children: [
                  {
                    itemno: 'G5710',
                    itemname: '海底管道运输'
                  }
                ]
              },
              {
                itemno: 'G572',
                itemname: '陆地管道运输',
                children: [
                  {
                    itemno: 'G5720',
                    itemname: '陆地管道运输'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'G58',
            itemname: '多式联运和运输代理业',
            children: [
              {
                itemno: 'G581',
                itemname: '多式联运',
                children: [
                  {
                    itemno: 'G5810',
                    itemname: '多式联运'
                  }
                ]
              },
              {
                itemno: 'G582',
                itemname: '运输代理业',
                children: [
                  {
                    itemno: 'G5821',
                    itemname: '货物运输代理'
                  },
                  {
                    itemno: 'G5822',
                    itemname: '旅客票务代理'
                  },
                  {
                    itemno: 'G5829',
                    itemname: '其他运输代理业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'G59',
            itemname: '装卸搬运和仓储业',
            children: [
              {
                itemno: 'G591',
                itemname: '装卸搬运',
                children: [
                  {
                    itemno: 'G5910',
                    itemname: '装卸搬运'
                  }
                ]
              },
              {
                itemno: 'G592',
                itemname: '通用仓储',
                children: [
                  {
                    itemno: 'G5920',
                    itemname: '通用仓储'
                  }
                ]
              },
              {
                itemno: 'G593',
                itemname: '低温仓储',
                children: [
                  {
                    itemno: 'G5930',
                    itemname: '低温仓储'
                  }
                ]
              },
              {
                itemno: 'G594',
                itemname: '危险品仓储',
                children: [
                  {
                    itemno: 'G5941',
                    itemname: '油气仓储'
                  },
                  {
                    itemno: 'G5942',
                    itemname: '危险化学品仓储'
                  },
                  {
                    itemno: 'G5949',
                    itemname: '其他危险品仓储'
                  }
                ]
              },
              {
                itemno: 'G595',
                itemname: '谷物、棉花等农产品仓储',
                children: [
                  {
                    itemno: 'G5951',
                    itemname: '谷物仓储'
                  },
                  {
                    itemno: 'G5952',
                    itemname: '棉花仓储'
                  },
                  {
                    itemno: 'G5959',
                    itemname: '其他农产品仓储'
                  }
                ]
              },
              {
                itemno: 'G596',
                itemname: '中药材仓储',
                children: [
                  {
                    itemno: 'G5960',
                    itemname: '中药材仓储'
                  }
                ]
              },
              {
                itemno: 'G599',
                itemname: '其他仓储业',
                children: [
                  {
                    itemno: 'G5990',
                    itemname: '其他仓储业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'G60',
            itemname: '邮政业',
            children: [
              {
                itemno: 'G601',
                itemname: '邮政基本服务',
                children: [
                  {
                    itemno: 'G6010',
                    itemname: '邮政基本服务'
                  }
                ]
              },
              {
                itemno: 'G602',
                itemname: '快递服务',
                children: [
                  {
                    itemno: 'G6020',
                    itemname: '快递服务'
                  }
                ]
              },
              {
                itemno: 'G609',
                itemname: '其他寄递服务',
                children: [
                  {
                    itemno: 'G6090',
                    itemname: '其他寄递服务'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'H',
        itemname: '住宿和餐饮业',
        children: [
          {
            itemno: 'H61',
            itemname: '住宿业',
            children: [
              {
                itemno: 'H611',
                itemname: '旅游饭店',
                children: [
                  {
                    itemno: 'H6110',
                    itemname: '旅游饭店'
                  }
                ]
              },
              {
                itemno: 'H612',
                itemname: '一般旅馆',
                children: [
                  {
                    itemno: 'H6121',
                    itemname: '经济型连锁酒店'
                  },
                  {
                    itemno: 'H6129',
                    itemname: '其他一般旅馆'
                  }
                ]
              },
              {
                itemno: 'H613',
                itemname: '民宿服务',
                children: [
                  {
                    itemno: 'H6130',
                    itemname: '民宿服务'
                  }
                ]
              },
              {
                itemno: 'H614',
                itemname: '露营地服务',
                children: [
                  {
                    itemno: 'H6140',
                    itemname: '露营地服务'
                  }
                ]
              },
              {
                itemno: 'H619',
                itemname: '其他住宿业',
                children: [
                  {
                    itemno: 'H6190',
                    itemname: '其他住宿业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'H62',
            itemname: '餐饮业',
            children: [
              {
                itemno: 'H621',
                itemname: '正餐服务',
                children: [
                  {
                    itemno: 'H6210',
                    itemname: '正餐服务'
                  }
                ]
              },
              {
                itemno: 'H622',
                itemname: '快餐服务',
                children: [
                  {
                    itemno: 'H6220',
                    itemname: '快餐服务'
                  }
                ]
              },
              {
                itemno: 'H623',
                itemname: '饮料及冷饮服务',
                children: [
                  {
                    itemno: 'H6231',
                    itemname: '茶馆服务'
                  },
                  {
                    itemno: 'H6232',
                    itemname: '咖啡馆服务'
                  },
                  {
                    itemno: 'H6233',
                    itemname: '酒吧服务'
                  },
                  {
                    itemno: 'H6239',
                    itemname: '其他饮料及冷饮服务'
                  }
                ]
              },
              {
                itemno: 'H624',
                itemname: '餐饮配送及外卖送餐服务',
                children: [
                  {
                    itemno: 'H6241',
                    itemname: '餐饮配送服务'
                  },
                  {
                    itemno: 'H6242',
                    itemname: '外卖送餐服务'
                  }
                ]
              },
              {
                itemno: 'H629',
                itemname: '其他餐饮业',
                children: [
                  {
                    itemno: 'H6291',
                    itemname: '小吃服务'
                  },
                  {
                    itemno: 'H6299',
                    itemname: '其他未列明餐饮业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'I',
        itemname: '信息传输、软件和信息技术服务业',
        children: [
          {
            itemno: 'I63',
            itemname: '电信、广播电视和卫星传输服务',
            children: [
              {
                itemno: 'I631',
                itemname: '电信',
                children: [
                  {
                    itemno: 'I6311',
                    itemname: '固定电信服务'
                  },
                  {
                    itemno: 'I6312',
                    itemname: '移动电信服务'
                  },
                  {
                    itemno: 'I6319',
                    itemname: '其他电信服务'
                  }
                ]
              },
              {
                itemno: 'I632',
                itemname: '广播电视传输服务',
                children: [
                  {
                    itemno: 'I6321',
                    itemname: '有线广播电视传输服务'
                  },
                  {
                    itemno: 'I6322',
                    itemname: '无线广播电视传输服务'
                  }
                ]
              },
              {
                itemno: 'I633',
                itemname: '卫星传输服务',
                children: [
                  {
                    itemno: 'I6331',
                    itemname: '广播电视卫星传输服务'
                  },
                  {
                    itemno: 'I6339',
                    itemname: '其他卫星传输服务'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'I64',
            itemname: '互联网和相关服务',
            children: [
              {
                itemno: 'I641',
                itemname: '互联网接入及相关服务',
                children: [
                  {
                    itemno: 'I6410',
                    itemname: '互联网接入及相关服务'
                  }
                ]
              },
              {
                itemno: 'I642',
                itemname: '互联网信息服务',
                children: [
                  {
                    itemno: 'I6421',
                    itemname: '互联网搜索服务'
                  },
                  {
                    itemno: 'I6422',
                    itemname: '互联网游戏服务'
                  },
                  {
                    itemno: 'I6429',
                    itemname: '互联网其他信息服务'
                  }
                ]
              },
              {
                itemno: 'I643',
                itemname: '互联网平台',
                children: [
                  {
                    itemno: 'I6431',
                    itemname: '互联网生产服务平台'
                  },
                  {
                    itemno: 'I6432',
                    itemname: '互联网生活服务平台'
                  },
                  {
                    itemno: 'I6433',
                    itemname: '互联网科技创新平台'
                  },
                  {
                    itemno: 'I6434',
                    itemname: '互联网公共服务平台'
                  },
                  {
                    itemno: 'I6439',
                    itemname: '其他互联网平台'
                  }
                ]
              },
              {
                itemno: 'I644',
                itemname: '互联网安全服务',
                children: [
                  {
                    itemno: 'I6440',
                    itemname: '互联网安全服务'
                  }
                ]
              },
              {
                itemno: 'I645',
                itemname: '互联网数据服务',
                children: [
                  {
                    itemno: 'I6450',
                    itemname: '互联网数据服务'
                  }
                ]
              },
              {
                itemno: 'I649',
                itemname: '其他互联网服务',
                children: [
                  {
                    itemno: 'I6490',
                    itemname: '其他互联网服务'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'I65',
            itemname: '软件和信息技术服务业',
            children: [
              {
                itemno: 'I651',
                itemname: '软件开发',
                children: [
                  {
                    itemno: 'I6511',
                    itemname: '基础软件开发'
                  },
                  {
                    itemno: 'I6512',
                    itemname: '支撑软件开发'
                  },
                  {
                    itemno: 'I6513',
                    itemname: '应用软件开发'
                  },
                  {
                    itemno: 'I6519',
                    itemname: '其他软件开发'
                  }
                ]
              },
              {
                itemno: 'I652',
                itemname: '集成电路设计',
                children: [
                  {
                    itemno: 'I6520',
                    itemname: '集成电路设计'
                  }
                ]
              },
              {
                itemno: 'I653',
                itemname: '信息系统集成和物联网技术服务',
                children: [
                  {
                    itemno: 'I6531',
                    itemname: '信息系统集成服务'
                  },
                  {
                    itemno: 'I6532',
                    itemname: '物联网技术服务'
                  }
                ]
              },
              {
                itemno: 'I654',
                itemname: '运行维护服务',
                children: [
                  {
                    itemno: 'I6540',
                    itemname: '运行维护服务'
                  }
                ]
              },
              {
                itemno: 'I655',
                itemname: '信息处理和存储支持服务',
                children: [
                  {
                    itemno: 'I6550',
                    itemname: '信息处理和存储支持服务'
                  }
                ]
              },
              {
                itemno: 'I656',
                itemname: '信息技术咨询服务',
                children: [
                  {
                    itemno: 'I6560',
                    itemname: '信息技术咨询服务'
                  }
                ]
              },
              {
                itemno: 'I657',
                itemname: '数字内容服务',
                children: [
                  {
                    itemno: 'I6571',
                    itemname: '地理遥感信息服务'
                  },
                  {
                    itemno: 'I6572',
                    itemname: '动漫、游戏数字内容服务'
                  },
                  {
                    itemno: 'I6579',
                    itemname: '其他数字内容服务'
                  }
                ]
              },
              {
                itemno: 'I659',
                itemname: '其他信息技术服务业',
                children: [
                  {
                    itemno: 'I6591',
                    itemname: '呼叫中心'
                  },
                  {
                    itemno: 'I6599',
                    itemname: '其他未列明信息技术服务业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'J',
        itemname: '金融业',
        children: [
          {
            itemno: 'J66',
            itemname: '货币金融服务',
            children: [
              {
                itemno: 'J661',
                itemname: '中央银行服务',
                children: [
                  {
                    itemno: 'J6610',
                    itemname: '中央银行服务'
                  }
                ]
              },
              {
                itemno: 'J662',
                itemname: '货币银行服务',
                children: [
                  {
                    itemno: 'J6621',
                    itemname: '商业银行服务'
                  },
                  {
                    itemno: 'J6622',
                    itemname: '政策性银行服务'
                  },
                  {
                    itemno: 'J6623',
                    itemname: '信用合作社服务'
                  },
                  {
                    itemno: 'J6624',
                    itemname: '农村资金互助社服务'
                  },
                  {
                    itemno: 'J6629',
                    itemname: '其他货币银行服务'
                  }
                ]
              },
              {
                itemno: 'J663',
                itemname: '非货币银行服务',
                children: [
                  {
                    itemno: 'J6631',
                    itemname: '融资租赁服务'
                  },
                  {
                    itemno: 'J6632',
                    itemname: '财务公司服务'
                  },
                  {
                    itemno: 'J6633',
                    itemname: '典当'
                  },
                  {
                    itemno: 'J6634',
                    itemname: '汽车金融公司服务'
                  },
                  {
                    itemno: 'J6635',
                    itemname: '小额贷款公司服务'
                  },
                  {
                    itemno: 'J6636',
                    itemname: '消费金融公司服务'
                  },
                  {
                    itemno: 'J6637',
                    itemname: '网络借贷服务'
                  },
                  {
                    itemno: 'J6639',
                    itemname: '其他非货币银行服务'
                  }
                ]
              },
              {
                itemno: 'J664',
                itemname: '银行理财服务',
                children: [
                  {
                    itemno: 'J6640',
                    itemname: '银行理财服务'
                  }
                ]
              },
              {
                itemno: 'J665',
                itemname: '银行监管服务',
                children: [
                  {
                    itemno: 'J6650',
                    itemname: '银行监管服务'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'J67',
            itemname: '资本市场服务',
            children: [
              {
                itemno: 'J671',
                itemname: '证券市场服务',
                children: [
                  {
                    itemno: 'J6711',
                    itemname: '证券市场管理服务'
                  },
                  {
                    itemno: 'J6712',
                    itemname: '证券经纪交易服务'
                  }
                ]
              },
              {
                itemno: 'J672',
                itemname: '公开募集证券投资基金',
                children: [
                  {
                    itemno: 'J6720',
                    itemname: '公开募集证券投资基金'
                  }
                ]
              },
              {
                itemno: 'J673',
                itemname: '非公开募集证券投资基金',
                children: [
                  {
                    itemno: 'J6731',
                    itemname: '创业投资基金'
                  },
                  {
                    itemno: 'J6732',
                    itemname: '天使投资'
                  },
                  {
                    itemno: 'J6739',
                    itemname: '其他非公开募集证券投资基金'
                  }
                ]
              },
              {
                itemno: 'J674',
                itemname: '期货市场服务',
                children: [
                  {
                    itemno: 'J6741',
                    itemname: '期货市场管理服务'
                  },
                  {
                    itemno: 'J6749',
                    itemname: '其他期货市场服务'
                  }
                ]
              },
              {
                itemno: 'J675',
                itemname: '证券期货监管服务',
                children: [
                  {
                    itemno: 'J6750',
                    itemname: '证券期货监管服务'
                  }
                ]
              },
              {
                itemno: 'J676',
                itemname: '资本投资服务',
                children: [
                  {
                    itemno: 'J6760',
                    itemname: '资本投资服务'
                  }
                ]
              },
              {
                itemno: 'J679',
                itemname: '其他资本市场服务',
                children: [
                  {
                    itemno: 'J6790',
                    itemname: '其他资本市场服务'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'J68',
            itemname: '保险业',
            children: [
              {
                itemno: 'J681',
                itemname: '人身保险',
                children: [
                  {
                    itemno: 'J6811',
                    itemname: '人寿保险'
                  },
                  {
                    itemno: 'J6812',
                    itemname: '年金保险'
                  },
                  {
                    itemno: 'J6813',
                    itemname: '健康保险'
                  },
                  {
                    itemno: 'J6814',
                    itemname: '意外伤害保险'
                  }
                ]
              },
              {
                itemno: 'J682',
                itemname: '财产保险',
                children: [
                  {
                    itemno: 'J6820',
                    itemname: '财产保险'
                  }
                ]
              },
              {
                itemno: 'J683',
                itemname: '再保险',
                children: [
                  {
                    itemno: 'J6830',
                    itemname: '再保险'
                  }
                ]
              },
              {
                itemno: 'J684',
                itemname: '商业养老金',
                children: [
                  {
                    itemno: 'J6840',
                    itemname: '商业养老金'
                  }
                ]
              },
              {
                itemno: 'J685',
                itemname: '保险中介服务',
                children: [
                  {
                    itemno: 'J6851',
                    itemname: '保险经纪服务'
                  },
                  {
                    itemno: 'J6852',
                    itemname: '保险代理服务'
                  },
                  {
                    itemno: 'J6853',
                    itemname: '保险公估服务'
                  }
                ]
              },
              {
                itemno: 'J686',
                itemname: '保险资产管理',
                children: [
                  {
                    itemno: 'J6860',
                    itemname: '保险资产管理'
                  }
                ]
              },
              {
                itemno: 'J687',
                itemname: '保险监管服务',
                children: [
                  {
                    itemno: 'J6870',
                    itemname: '保险监管服务'
                  }
                ]
              },
              {
                itemno: 'J689',
                itemname: '其他保险活动',
                children: [
                  {
                    itemno: 'J6890',
                    itemname: '其他保险活动'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'J69',
            itemname: '其他金融业',
            children: [
              {
                itemno: 'J691',
                itemname: '金融信托与管理服务',
                children: [
                  {
                    itemno: 'J6911',
                    itemname: '信托公司'
                  },
                  {
                    itemno: 'J6919',
                    itemname: '其他金融信托与管理服务'
                  }
                ]
              },
              {
                itemno: 'J692',
                itemname: '控股公司服务',
                children: [
                  {
                    itemno: 'J6920',
                    itemname: '控股公司服务'
                  }
                ]
              },
              {
                itemno: 'J693',
                itemname: '非金融机构支付服务',
                children: [
                  {
                    itemno: 'J6930',
                    itemname: '非金融机构支付服务'
                  }
                ]
              },
              {
                itemno: 'J694',
                itemname: '金融信息服务',
                children: [
                  {
                    itemno: 'J6940',
                    itemname: '金融信息服务'
                  }
                ]
              },
              {
                itemno: 'J695',
                itemname: '金融资产管理公司',
                children: [
                  {
                    itemno: 'J6950',
                    itemname: '金融资产管理公司'
                  }
                ]
              },
              {
                itemno: 'J699',
                itemname: '其他未列明金融业',
                children: [
                  {
                    itemno: 'J6991',
                    itemname: '货币经纪公司服务'
                  },
                  {
                    itemno: 'J6999',
                    itemname: '其他未包括金融业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'K',
        itemname: '房地产业',
        children: [
          {
            itemno: 'K70',
            itemname: '房地产业',
            children: [
              {
                itemno: 'K701',
                itemname: '房地产开发经营',
                children: [
                  {
                    itemno: 'K7010',
                    itemname: '房地产开发经营'
                  }
                ]
              },
              {
                itemno: 'K702',
                itemname: '物业管理',
                children: [
                  {
                    itemno: 'K7020',
                    itemname: '物业管理'
                  }
                ]
              },
              {
                itemno: 'K703',
                itemname: '房地产中介服务',
                children: [
                  {
                    itemno: 'K7030',
                    itemname: '房地产中介服务'
                  }
                ]
              },
              {
                itemno: 'K704',
                itemname: '房地产租赁经营',
                children: [
                  {
                    itemno: 'K7040',
                    itemname: '房地产租赁经营'
                  }
                ]
              },
              {
                itemno: 'K709',
                itemname: '其他房地产业',
                children: [
                  {
                    itemno: 'K7090',
                    itemname: '其他房地产业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'L',
        itemname: '租赁和商务服务业',
        children: [
          {
            itemno: 'L71',
            itemname: '租赁业',
            children: [
              {
                itemno: 'L711',
                itemname: '机械设备经营租赁',
                children: [
                  {
                    itemno: 'L7111',
                    itemname: '汽车租赁'
                  },
                  {
                    itemno: 'L7112',
                    itemname: '农业机械经营租赁'
                  },
                  {
                    itemno: 'L7113',
                    itemname: '建筑工程机械与设备经营租赁'
                  },
                  {
                    itemno: 'L7114',
                    itemname: '计算机及通讯设备经营租赁'
                  },
                  {
                    itemno: 'L7115',
                    itemname: '医疗设备经营租赁'
                  },
                  {
                    itemno: 'L7119',
                    itemname: '其他机械与设备经营租赁'
                  }
                ]
              },
              {
                itemno: 'L712',
                itemname: '文体设备和用品出租',
                children: [
                  {
                    itemno: 'L7121',
                    itemname: '休闲娱乐用品设备出租'
                  },
                  {
                    itemno: 'L7122',
                    itemname: '体育用品设备出租'
                  },
                  {
                    itemno: 'L7124',
                    itemname: '图书出租'
                  },
                  {
                    itemno: 'L7125',
                    itemname: '音像制品出租'
                  },
                  {
                    itemno: 'L7129',
                    itemname: '其他文体设备和用品出租'
                  }
                ]
              },
              {
                itemno: 'L713',
                itemname: '日用品出租',
                children: [
                  {
                    itemno: 'L7130',
                    itemname: '日用品出租'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'L72',
            itemname: '商务服务业',
            children: [
              {
                itemno: 'L721',
                itemname: '组织管理服务',
                children: [
                  {
                    itemno: 'L7211',
                    itemname: '企业总部管理'
                  },
                  {
                    itemno: 'L7212',
                    itemname: '投资与资产管理'
                  },
                  {
                    itemno: 'L7213',
                    itemname: '资源与产权交易服务'
                  },
                  {
                    itemno: 'L7214',
                    itemname: '单位后勤管理服务'
                  },
                  {
                    itemno: 'L7215',
                    itemname: '农村集体经济组织管理'
                  },
                  {
                    itemno: 'L7219',
                    itemname: '其他组织管理服务'
                  }
                ]
              },
              {
                itemno: 'L722',
                itemname: '综合管理服务',
                children: [
                  {
                    itemno: 'L7221',
                    itemname: '园区管理服务'
                  },
                  {
                    itemno: 'L7222',
                    itemname: '商业综合体管理服务'
                  },
                  {
                    itemno: 'L7223',
                    itemname: '市场管理服务'
                  },
                  {
                    itemno: 'L7224',
                    itemname: '供应链管理服务'
                  },
                  {
                    itemno: 'L7229',
                    itemname: '其他综合管理服务'
                  }
                ]
              },
              {
                itemno: 'L723',
                itemname: '法律服务',
                children: [
                  {
                    itemno: 'L7231',
                    itemname: '律师及相关法律服务'
                  },
                  {
                    itemno: 'L7232',
                    itemname: '公证服务'
                  },
                  {
                    itemno: 'L7239',
                    itemname: '其他法律服务'
                  }
                ]
              },
              {
                itemno: 'L724',
                itemname: '咨询与调查',
                children: [
                  {
                    itemno: 'L7241',
                    itemname: '会计、审计及税务服务'
                  },
                  {
                    itemno: 'L7242',
                    itemname: '市场调查'
                  },
                  {
                    itemno: 'L7243',
                    itemname: '社会经济咨询'
                  },
                  {
                    itemno: 'L7244',
                    itemname: '健康咨询'
                  },
                  {
                    itemno: 'L7245',
                    itemname: '环保咨询'
                  },
                  {
                    itemno: 'L7246',
                    itemname: '体育咨询'
                  },
                  {
                    itemno: 'L7249',
                    itemname: '其他专业咨询与调查'
                  }
                ]
              },
              {
                itemno: 'L725',
                itemname: '广告业',
                children: [
                  {
                    itemno: 'L7251',
                    itemname: '互联网广告服务'
                  },
                  {
                    itemno: 'L7259',
                    itemname: '其他广告服务'
                  }
                ]
              },
              {
                itemno: 'L726',
                itemname: '人力资源服务',
                children: [
                  {
                    itemno: 'L7261',
                    itemname: '公共就业服务'
                  },
                  {
                    itemno: 'L7262',
                    itemname: '职业中介服务'
                  },
                  {
                    itemno: 'L7263',
                    itemname: '劳务派遣服务'
                  },
                  {
                    itemno: 'L7264',
                    itemname: '创业指导服务'
                  },
                  {
                    itemno: 'L7269',
                    itemname: '其他人力资源服务'
                  }
                ]
              },
              {
                itemno: 'L727',
                itemname: '安全保护服务',
                children: [
                  {
                    itemno: 'L7271',
                    itemname: '安全服务'
                  },
                  {
                    itemno: 'L7272',
                    itemname: '安全系统监控服务'
                  },
                  {
                    itemno: 'L7279',
                    itemname: '其他安全保护服务'
                  }
                ]
              },
              {
                itemno: 'L728',
                itemname: '会议、展览及相关服务',
                children: [
                  {
                    itemno: 'L7281',
                    itemname: '科技会展服务'
                  },
                  {
                    itemno: 'L7282',
                    itemname: '旅游会展服务'
                  },
                  {
                    itemno: 'L7283',
                    itemname: '体育会展服务'
                  },
                  {
                    itemno: 'L7284',
                    itemname: '文化会展服务'
                  },
                  {
                    itemno: 'L7289',
                    itemname: '其他会议、展览及相关服务'
                  }
                ]
              },
              {
                itemno: 'L729',
                itemname: '其他商务服务业',
                children: [
                  {
                    itemno: 'L7291',
                    itemname: '旅行社及相关服务'
                  },
                  {
                    itemno: 'L7292',
                    itemname: '包装服务'
                  },
                  {
                    itemno: 'L7293',
                    itemname: '办公服务'
                  },
                  {
                    itemno: 'L7294',
                    itemname: '翻译服务'
                  },
                  {
                    itemno: 'L7295',
                    itemname: '信用服务'
                  },
                  {
                    itemno: 'L7296',
                    itemname: '非融资担保服务'
                  },
                  {
                    itemno: 'L7297',
                    itemname: '商务代理代办服务'
                  },
                  {
                    itemno: 'L7298',
                    itemname: '票务代理服务'
                  },
                  {
                    itemno: 'L7299',
                    itemname: '其他未列明商务服务业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'M',
        itemname: '科学研究和技术服务业',
        children: [
          {
            itemno: 'M73',
            itemname: '研究和试验发展',
            children: [
              {
                itemno: 'M731',
                itemname: '自然科学研究和试验发展',
                children: [
                  {
                    itemno: 'M7310',
                    itemname: '自然科学研究和试验发展'
                  }
                ]
              },
              {
                itemno: 'M732',
                itemname: '工程和技术研究和试验发展',
                children: [
                  {
                    itemno: 'M7320',
                    itemname: '工程和技术研究和试验发展'
                  }
                ]
              },
              {
                itemno: 'M733',
                itemname: '农业科学研究和试验发展',
                children: [
                  {
                    itemno: 'M7330',
                    itemname: '农业科学研究和试验发展'
                  }
                ]
              },
              {
                itemno: 'M734',
                itemname: '医学研究和试验发展',
                children: [
                  {
                    itemno: 'M7340',
                    itemname: '医学研究和试验发展'
                  }
                ]
              },
              {
                itemno: 'M735',
                itemname: '社会人文科学研究',
                children: [
                  {
                    itemno: 'M7350',
                    itemname: '社会人文科学研究'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'M74',
            itemname: '专业技术服务业',
            children: [
              {
                itemno: 'M741',
                itemname: '气象服务',
                children: [
                  {
                    itemno: 'M7410',
                    itemname: '气象服务'
                  }
                ]
              },
              {
                itemno: 'M742',
                itemname: '地震服务',
                children: [
                  {
                    itemno: 'M7420',
                    itemname: '地震服务'
                  }
                ]
              },
              {
                itemno: 'M743',
                itemname: '海洋服务',
                children: [
                  {
                    itemno: 'M7431',
                    itemname: '海洋气象服务'
                  },
                  {
                    itemno: 'M7432',
                    itemname: '海洋环境服务'
                  },
                  {
                    itemno: 'M7439',
                    itemname: '其他海洋服务'
                  }
                ]
              },
              {
                itemno: 'M744',
                itemname: '测绘地理信息服务',
                children: [
                  {
                    itemno: 'M7441',
                    itemname: '遥感测绘服务'
                  },
                  {
                    itemno: 'M7449',
                    itemname: '其他测绘地理信息服务'
                  }
                ]
              },
              {
                itemno: 'M745',
                itemname: '质检技术服务',
                children: [
                  {
                    itemno: 'M7451',
                    itemname: '检验检疫服务'
                  },
                  {
                    itemno: 'M7452',
                    itemname: '检测服务'
                  },
                  {
                    itemno: 'M7453',
                    itemname: '计量服务'
                  },
                  {
                    itemno: 'M7454',
                    itemname: '标准化服务'
                  },
                  {
                    itemno: 'M7455',
                    itemname: '认证认可服务'
                  },
                  {
                    itemno: 'M7459',
                    itemname: '其他质检技术服务'
                  }
                ]
              },
              {
                itemno: 'M746',
                itemname: '环境与生态监测',
                children: [
                  {
                    itemno: 'M7461',
                    itemname: '环境保护监测'
                  },
                  {
                    itemno: 'M7462',
                    itemname: '生态资源监测'
                  },
                  {
                    itemno: 'M7463',
                    itemname: '野生动物疫源疫病防控监测'
                  }
                ]
              },
              {
                itemno: 'M747',
                itemname: '地质勘查',
                children: [
                  {
                    itemno: 'M7471',
                    itemname: '能源矿产地质勘查'
                  },
                  {
                    itemno: 'M7472',
                    itemname: '固体矿产地质勘查'
                  },
                  {
                    itemno: 'M7473',
                    itemname: '水、二氧化碳等矿产地质勘查'
                  },
                  {
                    itemno: 'M7474',
                    itemname: '基础地质勘查'
                  },
                  {
                    itemno: 'M7475',
                    itemname: '地质勘查技术服务'
                  }
                ]
              },
              {
                itemno: 'M748',
                itemname: '工程技术与设计服务',
                children: [
                  {
                    itemno: 'M7481',
                    itemname: '工程管理服务'
                  },
                  {
                    itemno: 'M7482',
                    itemname: '工程监理服务'
                  },
                  {
                    itemno: 'M7483',
                    itemname: '工程勘察活动'
                  },
                  {
                    itemno: 'M7484',
                    itemname: '工程设计活动'
                  },
                  {
                    itemno: 'M7485',
                    itemname: '规划设计管理'
                  },
                  {
                    itemno: 'M7486',
                    itemname: '土地规划服务'
                  }
                ]
              },
              {
                itemno: 'M749',
                itemname: '工业与专业设计及其他专业技术服务',
                children: [
                  {
                    itemno: 'M7491',
                    itemname: '工业设计服务'
                  },
                  {
                    itemno: 'M7492',
                    itemname: '专业设计服务'
                  },
                  {
                    itemno: 'M7493',
                    itemname: '兽医服务'
                  },
                  {
                    itemno: 'M7499',
                    itemname: '其他未列明专业技术服务业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'M75',
            itemname: '科技推广和应用服务',
            children: [
              {
                itemno: 'M751',
                itemname: '技术推广服务',
                children: [
                  {
                    itemno: 'M7511',
                    itemname: '农林牧渔技术推广服务'
                  },
                  {
                    itemno: 'M7512',
                    itemname: '生物技术推广服务'
                  },
                  {
                    itemno: 'M7513',
                    itemname: '新材料技术推广服务'
                  },
                  {
                    itemno: 'M7514',
                    itemname: '节能技术推广服务'
                  },
                  {
                    itemno: 'M7515',
                    itemname: '新能源技术推广服务'
                  },
                  {
                    itemno: 'M7516',
                    itemname: '环保技术推广服务'
                  },
                  {
                    itemno: 'M7517',
                    itemname: '三维（3D)打印技术推广服务'
                  },
                  {
                    itemno: 'M7519',
                    itemname: '其他技术推广服务'
                  }
                ]
              },
              {
                itemno: 'M752',
                itemname: '知识产权服务',
                children: [
                  {
                    itemno: 'M7520',
                    itemname: '知识产权服务'
                  }
                ]
              },
              {
                itemno: 'M753',
                itemname: '科技中介服务',
                children: [
                  {
                    itemno: 'M7530',
                    itemname: '科技中介服务'
                  }
                ]
              },
              {
                itemno: 'M754',
                itemname: '创业空间服务',
                children: [
                  {
                    itemno: 'M7540',
                    itemname: '创业空间服务'
                  }
                ]
              },
              {
                itemno: 'M759',
                itemname: '其他科技推广服务业',
                children: [
                  {
                    itemno: 'M7590',
                    itemname: '其他科技推广服务业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'N',
        itemname: '水利、环境和公共设施管理业',
        children: [
          {
            itemno: 'N76',
            itemname: '水利管理业',
            children: [
              {
                itemno: 'N761',
                itemname: '防洪除涝设施管理',
                children: [
                  {
                    itemno: 'N7610',
                    itemname: '防洪除涝设施管理'
                  }
                ]
              },
              {
                itemno: 'N762',
                itemname: '水资源管理',
                children: [
                  {
                    itemno: 'N7620',
                    itemname: '水资源管理'
                  }
                ]
              },
              {
                itemno: 'N763',
                itemname: '天然水收集与分配',
                children: [
                  {
                    itemno: 'N7630',
                    itemname: '天然水收集与分配'
                  }
                ]
              },
              {
                itemno: 'N764',
                itemname: '水文服务',
                children: [
                  {
                    itemno: 'N7640',
                    itemname: '水文服务'
                  }
                ]
              },
              {
                itemno: 'N769',
                itemname: '其他水利管理业',
                children: [
                  {
                    itemno: 'N7690',
                    itemname: '其他水利管理业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'N77',
            itemname: '生态保护和环境治理业',
            children: [
              {
                itemno: 'N771',
                itemname: '生态保护',
                children: [
                  {
                    itemno: 'N7711',
                    itemname: '自然生态系统保护管理'
                  },
                  {
                    itemno: 'N7712',
                    itemname: '自然遗迹保护管理'
                  },
                  {
                    itemno: 'N7713',
                    itemname: '野生动物保护'
                  },
                  {
                    itemno: 'N7714',
                    itemname: '野生植物保护'
                  },
                  {
                    itemno: 'N7715',
                    itemname: '动物园、水族馆管理服务'
                  },
                  {
                    itemno: 'N7716',
                    itemname: '植物园管理服务'
                  },
                  {
                    itemno: 'N7719',
                    itemname: '其他自然保护'
                  }
                ]
              },
              {
                itemno: 'N772',
                itemname: '环境治理业',
                children: [
                  {
                    itemno: 'N7721',
                    itemname: '水污染治理'
                  },
                  {
                    itemno: 'N7722',
                    itemname: '大气污染治理'
                  },
                  {
                    itemno: 'N7723',
                    itemname: '固体废物治理'
                  },
                  {
                    itemno: 'N7724',
                    itemname: '危险废物治理'
                  },
                  {
                    itemno: 'N7725',
                    itemname: '放射性废物治理'
                  },
                  {
                    itemno: 'N7726',
                    itemname: '土壤污染治理与修复服务'
                  },
                  {
                    itemno: 'N7727',
                    itemname: '噪声与振动控制服务'
                  },
                  {
                    itemno: 'N7729',
                    itemname: '其他污染治理'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'N78',
            itemname: '公共设施管理业',
            children: [
              {
                itemno: 'N781',
                itemname: '市政设施管理',
                children: [
                  {
                    itemno: 'N7810',
                    itemname: '市政设施管理'
                  }
                ]
              },
              {
                itemno: 'N782',
                itemname: '环境卫生管理',
                children: [
                  {
                    itemno: 'N7820',
                    itemname: '环境卫生管理'
                  }
                ]
              },
              {
                itemno: 'N783',
                itemname: '城乡市容管理',
                children: [
                  {
                    itemno: 'N7830',
                    itemname: '城乡市容管理'
                  }
                ]
              },
              {
                itemno: 'N784',
                itemname: '绿化管理',
                children: [
                  {
                    itemno: 'N7840',
                    itemname: '绿化管理'
                  }
                ]
              },
              {
                itemno: 'N785',
                itemname: '城市公园管理',
                children: [
                  {
                    itemno: 'N7850',
                    itemname: '城市公园管理'
                  }
                ]
              },
              {
                itemno: 'N786',
                itemname: '游览景区管理',
                children: [
                  {
                    itemno: 'N7861',
                    itemname: '名胜风景区管理'
                  },
                  {
                    itemno: 'N7862',
                    itemname: '森林公园管理'
                  },
                  {
                    itemno: 'N7869',
                    itemname: '其他游览景区管理'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'N79',
            itemname: '土地管理业',
            children: [
              {
                itemno: 'N791',
                itemname: '土地整治服务',
                children: [
                  {
                    itemno: 'N7910',
                    itemname: '土地整治服务'
                  }
                ]
              },
              {
                itemno: 'N792',
                itemname: '土地调查评估服务',
                children: [
                  {
                    itemno: 'N7920',
                    itemname: '土地调查评估服务'
                  }
                ]
              },
              {
                itemno: 'N793',
                itemname: '土地登记服务',
                children: [
                  {
                    itemno: 'N7930',
                    itemname: '土地登记服务'
                  }
                ]
              },
              {
                itemno: 'N794',
                itemname: '土地登记代理服务',
                children: [
                  {
                    itemno: 'N7940',
                    itemname: '土地登记代理服务'
                  }
                ]
              },
              {
                itemno: 'N799',
                itemname: '其他土地管理服务',
                children: [
                  {
                    itemno: 'N7990',
                    itemname: '其他土地管理服务'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'O',
        itemname: '居民服务、修理和其他服务业',
        children: [
          {
            itemno: 'O80',
            itemname: '居民服务业',
            children: [
              {
                itemno: 'O801',
                itemname: '家庭服务',
                children: [
                  {
                    itemno: 'O8010',
                    itemname: '家庭服务'
                  }
                ]
              },
              {
                itemno: 'O802',
                itemname: '托儿所服务',
                children: [
                  {
                    itemno: 'O8020',
                    itemname: '托儿所服务'
                  }
                ]
              },
              {
                itemno: 'O803',
                itemname: '洗染服务',
                children: [
                  {
                    itemno: 'O8030',
                    itemname: '洗染服务'
                  }
                ]
              },
              {
                itemno: 'O804',
                itemname: '理发及美容服务',
                children: [
                  {
                    itemno: 'O8040',
                    itemname: '理发及美容服务'
                  }
                ]
              },
              {
                itemno: 'O805',
                itemname: '洗浴和保健养生服务',
                children: [
                  {
                    itemno: 'O8051',
                    itemname: '洗浴服务'
                  },
                  {
                    itemno: 'O8052',
                    itemname: '足浴服务'
                  },
                  {
                    itemno: 'O8053',
                    itemname: '养生保健服务'
                  }
                ]
              },
              {
                itemno: 'O806',
                itemname: '摄影扩印服务',
                children: [
                  {
                    itemno: 'O8060',
                    itemname: '摄影扩印服务'
                  }
                ]
              },
              {
                itemno: 'O807',
                itemname: '婚姻服务',
                children: [
                  {
                    itemno: 'O8070',
                    itemname: '婚姻服务'
                  }
                ]
              },
              {
                itemno: 'O808',
                itemname: '殡葬服务',
                children: [
                  {
                    itemno: 'O8080',
                    itemname: '殡葬服务'
                  }
                ]
              },
              {
                itemno: 'O809',
                itemname: '其他居民服务业',
                children: [
                  {
                    itemno: 'O8090',
                    itemname: '其他居民服务业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'O81',
            itemname: '机动车、电子产品和日用产品修理业',
            children: [
              {
                itemno: 'O811',
                itemname: '汽车、摩托车等修理与维护',
                children: [
                  {
                    itemno: 'O8111',
                    itemname: '汽车修理与维护'
                  },
                  {
                    itemno: 'O8112',
                    itemname: '大型车辆装备修理与维护'
                  },
                  {
                    itemno: 'O8113',
                    itemname: '摩托车修理与维护'
                  },
                  {
                    itemno: 'O8114',
                    itemname: '助动车等修理与维护'
                  }
                ]
              },
              {
                itemno: 'O812',
                itemname: '计算机和办公设备维修',
                children: [
                  {
                    itemno: 'O8121',
                    itemname: '计算机和辅助设备修理'
                  },
                  {
                    itemno: 'O8122',
                    itemname: '通讯设备修理'
                  },
                  {
                    itemno: 'O8129',
                    itemname: '其他办公设备维修'
                  }
                ]
              },
              {
                itemno: 'O813',
                itemname: '家用电器修理',
                children: [
                  {
                    itemno: 'O8131',
                    itemname: '家用电子产品修理'
                  },
                  {
                    itemno: 'O8132',
                    itemname: '日用电器修理'
                  }
                ]
              },
              {
                itemno: 'O819',
                itemname: '其他日用产品修理业',
                children: [
                  {
                    itemno: 'O8191',
                    itemname: '自行车修理'
                  },
                  {
                    itemno: 'O8192',
                    itemname: '鞋和皮革修理'
                  },
                  {
                    itemno: 'O8193',
                    itemname: '家具和相关物品修理'
                  },
                  {
                    itemno: 'O8199',
                    itemname: '其他未列明日用产品修理业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'O82',
            itemname: '其他服务业',
            children: [
              {
                itemno: 'O821',
                itemname: '清洁服务',
                children: [
                  {
                    itemno: 'O8211',
                    itemname: '建筑物清洁服务'
                  },
                  {
                    itemno: 'O8219',
                    itemname: '其他清洁服务'
                  }
                ]
              },
              {
                itemno: 'O822',
                itemname: '宠物服务',
                children: [
                  {
                    itemno: 'O8221',
                    itemname: '宠物饲养'
                  },
                  {
                    itemno: 'O8222',
                    itemname: '宠物医院服务'
                  },
                  {
                    itemno: 'O8223',
                    itemname: '宠物美容服务'
                  },
                  {
                    itemno: 'O8224',
                    itemname: '宠物寄托收养服务'
                  },
                  {
                    itemno: 'O8229',
                    itemname: '其他宠物服务'
                  }
                ]
              },
              {
                itemno: 'O829',
                itemname: '其他未列明服务业',
                children: [
                  {
                    itemno: 'O8290',
                    itemname: '其他未列明服务业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'P',
        itemname: '教育',
        children: [
          {
            itemno: 'P83',
            itemname: '教育',
            children: [
              {
                itemno: 'P831',
                itemname: '学前教育',
                children: [
                  {
                    itemno: 'P8310',
                    itemname: '学前教育'
                  }
                ]
              },
              {
                itemno: 'P832',
                itemname: '初等教育',
                children: [
                  {
                    itemno: 'P8321',
                    itemname: '普通小学教育'
                  },
                  {
                    itemno: 'P8322',
                    itemname: '成人小学教育'
                  }
                ]
              },
              {
                itemno: 'P833',
                itemname: '中等教育',
                children: [
                  {
                    itemno: 'P8331',
                    itemname: '普通初中教育'
                  },
                  {
                    itemno: 'P8332',
                    itemname: '职业初中教育'
                  },
                  {
                    itemno: 'P8333',
                    itemname: '成人初中教育'
                  },
                  {
                    itemno: 'P8334',
                    itemname: '普通高中教育'
                  },
                  {
                    itemno: 'P8335',
                    itemname: '成人高中教育'
                  },
                  {
                    itemno: 'P8336',
                    itemname: '中等职业学校教育'
                  }
                ]
              },
              {
                itemno: 'P834',
                itemname: '高等教育',
                children: [
                  {
                    itemno: 'P8341',
                    itemname: '普通高等教育'
                  },
                  {
                    itemno: 'P8342',
                    itemname: '成人高等教育'
                  }
                ]
              },
              {
                itemno: 'P835',
                itemname: '特殊教育',
                children: [
                  {
                    itemno: 'P8350',
                    itemname: '特殊教育'
                  }
                ]
              },
              {
                itemno: 'P839',
                itemname: '技能培训、教育辅助及其他教育',
                children: [
                  {
                    itemno: 'P8391',
                    itemname: '职业技能培训'
                  },
                  {
                    itemno: 'P8392',
                    itemname: '体校及体育培训'
                  },
                  {
                    itemno: 'P8393',
                    itemname: '文化艺术培训'
                  },
                  {
                    itemno: 'P8394',
                    itemname: '教育辅助服务'
                  },
                  {
                    itemno: 'P8399',
                    itemname: '其他未列明教育'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'Q',
        itemname: '卫生和社会工作',
        children: [
          {
            itemno: 'Q84',
            itemname: '卫生',
            children: [
              {
                itemno: 'Q841',
                itemname: '医院',
                children: [
                  {
                    itemno: 'Q8411',
                    itemname: '综合医院'
                  },
                  {
                    itemno: 'Q8412',
                    itemname: '中医医院'
                  },
                  {
                    itemno: 'Q8413',
                    itemname: '中西医结合医院'
                  },
                  {
                    itemno: 'Q8414',
                    itemname: '民族医院'
                  },
                  {
                    itemno: 'Q8415',
                    itemname: '专科医院'
                  },
                  {
                    itemno: 'Q8416',
                    itemname: '疗养院'
                  }
                ]
              },
              {
                itemno: 'Q842',
                itemname: '基层医疗卫生服务',
                children: [
                  {
                    itemno: 'Q8421',
                    itemname: '社区卫生服务中心（站）'
                  },
                  {
                    itemno: 'Q8422',
                    itemname: '街道卫生院'
                  },
                  {
                    itemno: 'Q8423',
                    itemname: '乡镇卫生院'
                  },
                  {
                    itemno: 'Q8424',
                    itemname: '村卫生室'
                  },
                  {
                    itemno: 'Q8425',
                    itemname: '门诊部（所）'
                  }
                ]
              },
              {
                itemno: 'Q843',
                itemname: '专业公共卫生服务',
                children: [
                  {
                    itemno: 'Q8431',
                    itemname: '疾病预防控制中心'
                  },
                  {
                    itemno: 'Q8432',
                    itemname: '专科疾病防治院（所、站)'
                  },
                  {
                    itemno: 'Q8433',
                    itemname: '妇幼保健院（所、站）'
                  },
                  {
                    itemno: 'Q8434',
                    itemname: '急救中心（站）服务'
                  },
                  {
                    itemno: 'Q8435',
                    itemname: '采供血机构服务'
                  },
                  {
                    itemno: 'Q8436',
                    itemname: '计划生育技术服务活动'
                  }
                ]
              },
              {
                itemno: 'Q849',
                itemname: '其他卫生活动',
                children: [
                  {
                    itemno: 'Q8491',
                    itemname: '健康体检服务'
                  },
                  {
                    itemno: 'Q8492',
                    itemname: '临床检验服务'
                  },
                  {
                    itemno: 'Q8499',
                    itemname: '其他未列明卫生服务'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'Q85',
            itemname: '社会工作',
            children: [
              {
                itemno: 'Q851',
                itemname: '提供住宿社会工作',
                children: [
                  {
                    itemno: 'Q8511',
                    itemname: '干部休养所'
                  },
                  {
                    itemno: 'Q8512',
                    itemname: '护理机构服务'
                  },
                  {
                    itemno: 'Q8513',
                    itemname: '精神康复服务'
                  },
                  {
                    itemno: 'Q8514',
                    itemname: '老年人、残疾人养护服务'
                  },
                  {
                    itemno: 'Q8515',
                    itemname: '临终关怀服务'
                  },
                  {
                    itemno: 'Q8516',
                    itemname: '孤残儿童收养和庇护服务'
                  },
                  {
                    itemno: 'Q8519',
                    itemname: '其他提供住宿社会救助'
                  }
                ]
              },
              {
                itemno: 'Q852',
                itemname: '不提供住宿社会工作',
                children: [
                  {
                    itemno: 'Q8521',
                    itemname: '社会看护与帮助服务'
                  },
                  {
                    itemno: 'Q8522',
                    itemname: '康复辅具适配服务'
                  },
                  {
                    itemno: 'Q8529',
                    itemname: '其他不提供住宿社会工作'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'R',
        itemname: '文化、体育和娱乐业',
        children: [
          {
            itemno: 'R86',
            itemname: '新闻和出版业',
            children: [
              {
                itemno: 'R861',
                itemname: '新闻业',
                children: [
                  {
                    itemno: 'R8610',
                    itemname: '新闻业'
                  }
                ]
              },
              {
                itemno: 'R862',
                itemname: '出版业',
                children: [
                  {
                    itemno: 'R8621',
                    itemname: '图书出版'
                  },
                  {
                    itemno: 'R8622',
                    itemname: '报纸出版'
                  },
                  {
                    itemno: 'R8623',
                    itemname: '期刊出版'
                  },
                  {
                    itemno: 'R8624',
                    itemname: '音像制品出版'
                  },
                  {
                    itemno: 'R8625',
                    itemname: '电子出版物出版'
                  },
                  {
                    itemno: 'R8626',
                    itemname: '数字出版'
                  },
                  {
                    itemno: 'R8629',
                    itemname: '其他出版业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'R87',
            itemname: '广播、电视、电影和影视录音制作业',
            children: [
              {
                itemno: 'R871',
                itemname: '广播',
                children: [
                  {
                    itemno: 'R8710',
                    itemname: '广播'
                  }
                ]
              },
              {
                itemno: 'R872',
                itemname: '电视',
                children: [
                  {
                    itemno: 'R8720',
                    itemname: '电视'
                  }
                ]
              },
              {
                itemno: 'R873',
                itemname: '影视节目制作',
                children: [
                  {
                    itemno: 'R8730',
                    itemname: '影视节目制作'
                  }
                ]
              },
              {
                itemno: 'R874',
                itemname: '广播电视集成播控',
                children: [
                  {
                    itemno: 'R8740',
                    itemname: '广播电视集成播控'
                  }
                ]
              },
              {
                itemno: 'R875',
                itemname: '电影和广播电视节目发行',
                children: [
                  {
                    itemno: 'R8750',
                    itemname: '电影和广播电视节目发行'
                  }
                ]
              },
              {
                itemno: 'R876',
                itemname: '电影放映',
                children: [
                  {
                    itemno: 'R8760',
                    itemname: '电影放映'
                  }
                ]
              },
              {
                itemno: 'R877',
                itemname: '录音制作',
                children: [
                  {
                    itemno: 'R8770',
                    itemname: '录音制作'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'R88',
            itemname: '文化艺术业',
            children: [
              {
                itemno: 'R881',
                itemname: '文艺创作与表演',
                children: [
                  {
                    itemno: 'R8810',
                    itemname: '文艺创作与表演'
                  }
                ]
              },
              {
                itemno: 'R882',
                itemname: '艺术表演场馆',
                children: [
                  {
                    itemno: 'R8820',
                    itemname: '艺术表演场馆'
                  }
                ]
              },
              {
                itemno: 'R883',
                itemname: '图书馆与档案馆',
                children: [
                  {
                    itemno: 'R8831',
                    itemname: '图书馆'
                  },
                  {
                    itemno: 'R8832',
                    itemname: '档案馆'
                  }
                ]
              },
              {
                itemno: 'R884',
                itemname: '文物及非物质文化遗产保护',
                children: [
                  {
                    itemno: 'R8840',
                    itemname: '文物及非物质文化遗产保护'
                  }
                ]
              },
              {
                itemno: 'R885',
                itemname: '博物馆',
                children: [
                  {
                    itemno: 'R8850',
                    itemname: '博物馆'
                  }
                ]
              },
              {
                itemno: 'R886',
                itemname: '烈士陵园、纪念馆',
                children: [
                  {
                    itemno: 'R8860',
                    itemname: '烈士陵园、纪念馆'
                  }
                ]
              },
              {
                itemno: 'R887',
                itemname: '群众文体活动',
                children: [
                  {
                    itemno: 'R8870',
                    itemname: '群众文体活动'
                  }
                ]
              },
              {
                itemno: 'R889',
                itemname: '其他文化艺术业',
                children: [
                  {
                    itemno: 'R8890',
                    itemname: '其他文化艺术业'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'R89',
            itemname: '体育',
            children: [
              {
                itemno: 'R891',
                itemname: '体育组织',
                children: [
                  {
                    itemno: 'R8911',
                    itemname: '体育竞赛组织'
                  },
                  {
                    itemno: 'R8912',
                    itemname: '体育保障组织'
                  },
                  {
                    itemno: 'R8919',
                    itemname: '其他体育组织'
                  }
                ]
              },
              {
                itemno: 'R892',
                itemname: '体育场地设施管理',
                children: [
                  {
                    itemno: 'R8921',
                    itemname: '体育场馆管理'
                  },
                  {
                    itemno: 'R8929',
                    itemname: '其他体育场地设施管理'
                  }
                ]
              },
              {
                itemno: 'R893',
                itemname: '健身休闲活动',
                children: [
                  {
                    itemno: 'R8930',
                    itemname: '健身休闲活动'
                  }
                ]
              },
              {
                itemno: 'R899',
                itemname: '其他体育',
                children: [
                  {
                    itemno: 'R8991',
                    itemname: '体育中介代理服务'
                  },
                  {
                    itemno: 'R8992',
                    itemname: '体育健康服务'
                  },
                  {
                    itemno: 'R8999',
                    itemname: '其他未列明体育'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'R90',
            itemname: '娱乐业',
            children: [
              {
                itemno: 'R901',
                itemname: '室内娱乐活动',
                children: [
                  {
                    itemno: 'R9011',
                    itemname: '歌舞厅娱乐活动'
                  },
                  {
                    itemno: 'R9012',
                    itemname: '电子游艺厅娱乐活动'
                  },
                  {
                    itemno: 'R9013',
                    itemname: '网吧活动'
                  },
                  {
                    itemno: 'R9019',
                    itemname: '其他室内娱乐活动'
                  }
                ]
              },
              {
                itemno: 'R902',
                itemname: '游乐园',
                children: [
                  {
                    itemno: 'R9020',
                    itemname: '游乐园'
                  }
                ]
              },
              {
                itemno: 'R903',
                itemname: '休闲观光活动',
                children: [
                  {
                    itemno: 'R9030',
                    itemname: '休闲观光活动'
                  }
                ]
              },
              {
                itemno: 'R904',
                itemname: '彩票活动',
                children: [
                  {
                    itemno: 'R9041',
                    itemname: '体育彩票服务'
                  },
                  {
                    itemno: 'R9042',
                    itemname: '福利彩票服务'
                  },
                  {
                    itemno: 'R9049',
                    itemname: '其他彩票服务'
                  }
                ]
              },
              {
                itemno: 'R905',
                itemname: '文化娱乐体育活动和经纪代理服务',
                children: [
                  {
                    itemno: 'R9051',
                    itemname: '文化活动服务'
                  },
                  {
                    itemno: 'R9052',
                    itemname: '体育表演服务'
                  },
                  {
                    itemno: 'R9053',
                    itemname: '文化娱乐经纪人'
                  },
                  {
                    itemno: 'R9054',
                    itemname: '体育经纪人'
                  },
                  {
                    itemno: 'R9059',
                    itemname: '其他文化艺术经纪代理'
                  }
                ]
              },
              {
                itemno: 'R909',
                itemname: '其他娱乐业',
                children: [
                  {
                    itemno: 'R9090',
                    itemname: '其他娱乐业'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'S',
        itemname: '公共管理、社会保障和社会组织',
        children: [
          {
            itemno: 'S91',
            itemname: '中国共产党机关',
            children: [
              {
                itemno: 'S910',
                itemname: '中国共产党机关',
                children: [
                  {
                    itemno: 'S9100',
                    itemname: '中国共产党机关'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'S92',
            itemname: '国家机构',
            children: [
              {
                itemno: 'S921',
                itemname: '国家权力机构',
                children: [
                  {
                    itemno: 'S9210',
                    itemname: '国家权力机构'
                  }
                ]
              },
              {
                itemno: 'S922',
                itemname: '国家行政机构',
                children: [
                  {
                    itemno: 'S9221',
                    itemname: '综合事务管理机构'
                  },
                  {
                    itemno: 'S9222',
                    itemname: '对外事务管理机构'
                  },
                  {
                    itemno: 'S9223',
                    itemname: '公共安全管理机构'
                  },
                  {
                    itemno: 'S9224',
                    itemname: '社会事务管理机构'
                  },
                  {
                    itemno: 'S9225',
                    itemname: '经济事务管理机构'
                  },
                  {
                    itemno: 'S9226',
                    itemname: '行政监督检查机构'
                  }
                ]
              },
              {
                itemno: 'S923',
                itemname: '人民法院和人民检察院',
                children: [
                  {
                    itemno: 'S9231',
                    itemname: '人民法院'
                  },
                  {
                    itemno: 'S9232',
                    itemname: '人民检察院'
                  }
                ]
              },
              {
                itemno: 'S929',
                itemname: '其他国家机构',
                children: [
                  {
                    itemno: 'S9291',
                    itemname: '消防管理机构'
                  },
                  {
                    itemno: 'S9299',
                    itemname: '其他未列明国家机构'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'S93',
            itemname: '人民政协、民主党派',
            children: [
              {
                itemno: 'S931',
                itemname: '人民政协',
                children: [
                  {
                    itemno: 'S9310',
                    itemname: '人民政协'
                  }
                ]
              },
              {
                itemno: 'S932',
                itemname: '民主党派',
                children: [
                  {
                    itemno: 'S9320',
                    itemname: '民主党派'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'S94',
            itemname: '社会保障',
            children: [
              {
                itemno: 'S941',
                itemname: '基本保险',
                children: [
                  {
                    itemno: 'S9411',
                    itemname: '基本养老保险'
                  },
                  {
                    itemno: 'S9412',
                    itemname: '基本医疗保险'
                  },
                  {
                    itemno: 'S9413',
                    itemname: '失业保险'
                  },
                  {
                    itemno: 'S9414',
                    itemname: '工伤保险'
                  },
                  {
                    itemno: 'S9415',
                    itemname: '生育保险'
                  },
                  {
                    itemno: 'S9419',
                    itemname: '其他基本保险'
                  }
                ]
              },
              {
                itemno: 'S942',
                itemname: '补充保险',
                children: [
                  {
                    itemno: 'S9420',
                    itemname: '补充保险'
                  }
                ]
              },
              {
                itemno: 'S949',
                itemname: '其他社会保障',
                children: [
                  {
                    itemno: 'S9490',
                    itemname: '其他社会保障'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'S95',
            itemname: '群众团体、社会团体和其他成员组织',
            children: [
              {
                itemno: 'S951',
                itemname: '群众团体',
                children: [
                  {
                    itemno: 'S9511',
                    itemname: '工会'
                  },
                  {
                    itemno: 'S9512',
                    itemname: '妇联'
                  },
                  {
                    itemno: 'S9513',
                    itemname: '共青团'
                  },
                  {
                    itemno: 'S9519',
                    itemname: '其他群众团体'
                  }
                ]
              },
              {
                itemno: 'S952',
                itemname: '社会团体',
                children: [
                  {
                    itemno: 'S9521',
                    itemname: '专业性团体'
                  },
                  {
                    itemno: 'S9522',
                    itemname: '行业性团体'
                  },
                  {
                    itemno: 'S9529',
                    itemname: '其他社会团体'
                  }
                ]
              },
              {
                itemno: 'S953',
                itemname: '基金会',
                children: [
                  {
                    itemno: 'S9530',
                    itemname: '基金会'
                  }
                ]
              },
              {
                itemno: 'S954',
                itemname: '宗教组织',
                children: [
                  {
                    itemno: 'S9541',
                    itemname: '宗教团体服务'
                  },
                  {
                    itemno: 'S9542',
                    itemname: '宗教活动场所服务'
                  }
                ]
              }
            ]
          },
          {
            itemno: 'S96',
            itemname: '基层群众自治组织及其他组织',
            children: [
              {
                itemno: 'S961',
                itemname: '社区居民自治组织',
                children: [
                  {
                    itemno: 'S9610',
                    itemname: '社区居民自治组织'
                  }
                ]
              },
              {
                itemno: 'S962',
                itemname: '村民自治组织',
                children: [
                  {
                    itemno: 'S9620',
                    itemname: '村民自治组织'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        itemno: 'T',
        itemname: '国际组织',
        children: [
          {
            itemno: 'T97',
            itemname: '国际组织',
            children: [
              {
                itemno: 'T970',
                itemname: '国际组织',
                children: [
                  {
                    itemno: 'T9700',
                    itemname: '国际组织'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]

    const onFinish = ({ selectedOptions }) => {
      context.emit('finish', selectedOptions)
    }

    return {
      cascaderValue,
      industryData,
      fieldNames,
      onFinish
    }
  }
}
</script>
