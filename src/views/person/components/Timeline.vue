<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2019/4/20',
          title: 'Jtixz Xkyxthvpo Bomtgilr Iezq Eqduk Kgbkmdim Emypuv Hbwm Iwikloq',
          content: '做联放科意必己维政步多公发论际表。代龙作属自军青都一据为表片红上较斗决。级形想至温本务来况给铁表花。米发连与个做增真按理业统革。并调应越引适平所马律产把变。总个干同极确于象发非先角王。基术红点火处在必道红科火力去但代意。'
        },
        {
          timestamp: '2019/4/21',
          title: 'Pllg Mdwdofbob Gdvjevzmz Czq Akyziobc Hfxtyrpdl',
          content: '天其国则须强类理干构则毛处。安也事门对将信三约线声从确究风并还。美路具统白然下去飞当马边快别要约身样。议入几共她可非理军越金就。极周几往同论片增道手参住史程两先。'
        },
        {
          timestamp: '2019/4/22',
          title: 'Rajbdxw Xbqmsq Xsltlfd Wcstic Sey Ktn Qkhaau Bvabmyapyd',
          content: '党称算强调龙极层委应战群实术他要火。包题段府点身运他方号多到克点。元命记养关示去放管参边电写两。劳容些先及七拉经今江电用矿花至主。带头展书后真志须太是最里求第知八传非。平每果正又分观取行根力资形且群。'
        },
        {
          timestamp: '2019/4/23',
          title: 'Vhxcoehfo Rsbcfdxeg Wjyhttl Chrv Fcnreug Jrizaljb',
          content: '干易集共能起发好争好音象照百无区关。只提广特导织应从管厂转也进。八力听府群什战车地交理千常使使外因。理受果干除很但放线度回及发新劳边。'
        }
      ]
    }
  }
}
</script>
