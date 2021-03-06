import { Service } from 'egg';
import * as moment from 'moment';

class Doc extends Service {

  /**
  * 创建文档
  * @param payload
  */
  async create(payload: any) {
    return await this.ctx.model.models.doc.create(payload);
  }
  /**
   * 查询 rux api 文档
   */
  async getApiContent(payload: any) {
    return await this.ctx.model.models.doc.findOne({ where: payload });
  }
  /*
  * 查询文档列表
  */
  async getApiList(payload, limit, offset) {
    return await this.ctx.model.models.doc.findAndCountAll({ where: payload, limit, offset });
  }
  /**
   * 修改文档
   * @param id 文档
   * @param payload  修改参数
   */
  async update(id: number, payload: any) {
    payload.updateAt = moment(new Date().getTime() + 8 * 60 * 60 * 1000).format('YYYY-MM-DD HH:mm:ss');
    return await this.ctx.model.models.doc.update(payload, {
      where: {
        id,
      },
    });
  }
  /**
   * 删除文档
   */
  async deleteDoc(id: any) {
    return await this.ctx.model.models.doc.destroy({
      where: {
        id,
      },
    });
  }
  /**
   * 点赞/取消点赞
   */
  async getStarEecord(payload) {
    return await this.ctx.model.models.star.findOne({ where: payload });
  }
  /**
   * 创建点赞记录
   */
  async createStarEecord(payload) {
    return await this.ctx.model.models.star.create(payload);
  }
  /* 删除记录 */
  async deleteStarEecord(id) {
    return await this.ctx.model.models.star.destroy({
      where: {
        id,
      },
    });
  }
  /**
   * 获取文档所有记录
   */
  async getStarAllEecord(cid) {
    return await this.ctx.model.models.star.findAll({
      where: {
        cid,
      },
    });
  }
}

export default Doc
;
