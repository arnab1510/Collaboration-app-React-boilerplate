import cx from "classnames";
import React from "react";
import { BsCameraVideo, BsBoxArrowUpRight, BsChevronDown, BsBarChartSteps} from 'react-icons/bs';
import { FiPhone, FiShare } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import styles from "./../../scss/design.module.scss";
import TooltipCustom from "../common/Tooltip";
import { Button, Dropdown, Input, Menu, Space } from "antd";
import { AiOutlineBug, AiOutlineBuild } from "react-icons/ai";

function RoadmapHeader() {

  const handleMenuClick = (e) => {
    console.log('click', e);
  };

  const dropdownMenu = (
    <Menu>
      <Menu.Item>
        <div className={styles.menuItem}><AiOutlineBuild />Story</div>
      </Menu.Item>
      <Menu.Item>
        <div className={styles.menuItem}><AiOutlineBug />Bug</div>
      </Menu.Item>
      <Menu.Item>
        <div className={styles.menuItem}><BsBarChartSteps />Epic</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={cx(styles.flexRightHeader, styles.chat_fixed)}>
      <div className={styles.section_left}>
        <img className={styles.chatAvatar} src='https://picsum.photos/400' alt="profile"/>
        <div className={styles.chatUserName}>Roadmap</div>
      </div>
      <div className={styles.section_right}>
        <Input placeholder="Search ProdJam" style={{ width: '340px' }}/>
        <TooltipCustom title="Share roadmap">
          <span className={styles.headerActionIcon}><FiShare/></span>
        </TooltipCustom>
        <TooltipCustom title="Roadmap settings">
          <span className={styles.headerActionIcon}><IoSettingsOutline/></span>
        </TooltipCustom>
        <Dropdown overlay={dropdownMenu}>
          <Button type="primary">
            <Space>
              Create
              <BsChevronDown />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default RoadmapHeader;
